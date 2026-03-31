import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Sub-components mapped out below
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Stats from './components/Stats.jsx';
import ProductCard from './components/ProductCard';
import Steps from './components/Steps';
import Pricing from './components/Pricing';
import CTA from './components/CTA.jsx';
import Footer from './components/Footer';

export default function App() {
  const [productsData, setProductsData] = useState([]); 
  const [activeTab, setActiveTab] = useState('products'); 
  const [cart, setCart] = useState([]);

  // ১. public ফোল্ডার থেকে ডাটা ফেচ (Fetch) করা
  useEffect(() => {
    fetch('/products/products.json') 
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setProductsData(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  // 2. Add to Cart
  const handleAddToCart = (product) => {
    const exists = cart.find(item => item.id === product.id);
    if (exists) {
      toast.info(`${product.name} is already in the cart!`);
    } else {
      setCart([...cart, product]);
      toast.success(`${product.name} added to cart!`);
    }
  };

  // 3. Remove From Cart
  const handleRemoveFromCart = (productId, productName) => {
    setCart(cart.filter(item => item.id !== productId));
    toast.error(`${productName} removed from cart.`);
  };

  // 4. Clear Cart (Proceed to checkout)
  const handleCheckout = () => {
    setCart([]);
    toast.success("Purchase successful! Thank you for your order.");
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="bg-white text-slate-800 font-sans">
      <ToastContainer position="top-right" autoClose={2000} />
      
      <Navbar cartCount={cart.length} />
      <Banner />
      <Stats />

      {/* Main Section & Toggling */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold mb-3">Premium Digital Tools</h2>
          <p className="text-slate-500 mb-6 text-[16px]">Choose from our curated collection of premium digital products designed <br></br> to boost your productivity and creativity.</p>
          
          {/* Toggle Buttons */}
          <div className="inline-flex border-2 border-primary rounded-full p-1 gap-2">
            <button 
              onClick={() => setActiveTab('products')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${activeTab === 'products' ? 'bg-primary text-white' : 'text-primary'}`}>
              Products
            </button>
            <button 
              onClick={() => setActiveTab('cart')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${activeTab === 'cart' ? 'bg-primary text-white' : 'text-primary'}`}>
              Cart ({cart.length})
            </button>
          </div>
        </div>

        {/* Product Grid View */}
        {activeTab === 'products' && (
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productsData.length > 0 ? (
              productsData.map(product => (
                <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
              ))
            ) : (
              <div className="col-span-3 text-center py-12">
                <p className="text-slate-400 text-lg">Loading products or no products found...</p>
              </div>
            )}
          </div>
        )}

        {/* Cart View */}
        {activeTab === 'cart' && (
          <div className="max-w-2xl mx-auto">
            {cart.length === 0 ? (
              <div className="text-center py-12 border-2 border-dashed border-slate-200 rounded-lg">
                <p className="text-slate-400 text-lg">Your cart is empty. Go find some awesome tools!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map(item => (
                  <div key={item.id} className="flex items-center justify-between border p-4 rounded-lg bg-slate-50">
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{item.icon}</span>
                      <div>
                        <h3 className="font-bold text-lg">{item.name}</h3>
                        <p className="text-primary font-semibold">${item.price}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => handleRemoveFromCart(item.id, item.name)}
                      className="btn btn-error btn-sm btn-outline">
                      Remove
                    </button>
                  </div>
                ))}

                {/* Total & Checkout */}
                <div className="mt-8 border-t pt-4 flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-medium">Total Added Products:</span>
                    <span className="text-2xl font-bold text-primary">${totalPrice}</span>
                  </div>
                  <button onClick={handleCheckout} className="btn btn-primary w-full text-white text-lg">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </section>

      <Steps />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}
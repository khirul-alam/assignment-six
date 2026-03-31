import { FiShoppingCart } from "react-icons/fi";
export default function Navbar({ cartCount }) {
  return (
    <div className="navbar bg-white border-b px-4 md:px-12 sticky top-0 z-50 container mx-auto">
      <div className="navbar-start">
        <a className="text-3xl font-bold text-primary cursor-pointer">DigiTools</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium text-slate-500 gap-2">
          <li><a>Products</a></li>
          <li><a>Features</a></li>
          <li><a>Pricing</a></li>
          <li><a>Testimonials</a></li>
          <li><a>FAQ</a></li>
        </ul>
      </div>
      <div className="navbar-end gap-1 flex justify-between items-center">
        {/* Cart Icon */}
        <div className="relative cursor-pointer p-2 ml-2.5">
          <FiShoppingCart className="h-6 w-6 text-slate-700 hover:text-primary transition-colors" />
          {cartCount > 0 && (
            <span className="badge badge-primary badge-sm absolute top-0 right-0 text-white">{cartCount}</span>
          )}
        </div>
        <button className="btn btn-ghost hidden md:inline-flex">Login</button>
        <button className="btn btn-primary text-white rounded-full px-6">Get Started</button>
      </div>
    </div>
  );
}
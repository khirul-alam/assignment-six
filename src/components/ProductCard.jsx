export default function ProductCard({ product, onAddToCart }) {
  const badgeClasses = {
    warning: "badge-warning",
    secondary: "badge-secondary",
    success: "badge-success text-white"
  };

  return (
    <div className="card bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all relative">
      <div className="card-body p-6 flex flex-col h-full">
        {/* Tag */}
        <div className={`absolute top-4 right-4 badge ${badgeClasses[product.tagType]} font-medium`}>
          {product.tag}
        </div>
        
        {/* Icon & Title */}
        <div className="text-4xl mb-3">{product.icon}</div>
        <h3 className="card-title text-xl font-bold">{product.name}</h3>
        <p className="text-sm text-slate-500 mb-4">{product.description}</p>
        
        {/* Price */}
        <div className="mb-4">
          <span className="text-3xl font-bold text-slate-800">${product.price}</span>
          <span className="text-slate-400 font-medium">/{product.period}</span>
        </div>

        {/* Features List */}
        <ul className="space-y-2 mb-6 text-sm">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="text-success text-lg">✓</span> {feature}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="card-actions mt-auto">
          <button 
            onClick={() => onAddToCart(product)} 
            className="btn btn-primary w-full text-white font-semibold">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
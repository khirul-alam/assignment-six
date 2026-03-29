import React from 'react';

export default function Steps() {
  const steps = [
    {
      id: 1,
      title: "Choose a Product",
      description: "Browse through our collection of premium digital tools and select what fits your needs.",
      icon: "🛒"
    },
    {
      id: 2,
      title: "Add to Cart",
      description: "Add your desired products to the cart and view your selection at any time.",
      icon: "💳"
    },
    {
      id: 3,
      title: "Instant Access",
      description: "Proceed to checkout to get immediate access to your purchased digital assets.",
      icon: "⚡"
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">How It Works</h2>
          <p className="text-slate-500">Get started with our platform in 3 simple steps</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm text-center hover:shadow-md transition-all">
              <div className="w-16 h-16 bg-primary/10 text-primary text-3xl flex items-center justify-center rounded-full mx-auto mb-6 font-bold">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.id}. {step.title}</h3>
              <p className="text-slate-500 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
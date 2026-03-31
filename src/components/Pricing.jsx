
import React from 'react';

export default function Pricing() {
  return (
    <section className="py-16 bg-white">
      
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Title & Description */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3 text-slate-800">Simple, Transparent Pricing</h2>
          <p className="text-slate-500">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          {/* Starter Plan */}
          <div className="border border-slate-200 rounded-xl p-8 flex flex-col hover:shadow-lg transition-all h-fit bg-white">
            <h3 className="text-2xl font-bold mb-2 text-slate-800">Starter</h3>
            <p className="text-slate-500 mb-6 text-sm">Perfect for getting started</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-slate-800">$0</span>
              <span className="text-slate-400 font-medium">/mo</span>
            </div>
            <ul className="space-y-3 mb-8 text-sm text-slate-600">
              <li className="flex items-center gap-2"><span className="text-success font-bold">✓</span> Access to 10 free tools</li>
              <li className="flex items-center gap-2"><span className="text-success font-bold">✓</span> Basic templates</li>
              <li className="flex items-center gap-2"><span className="text-success font-bold">✓</span> Community support</li>
              <li className="flex items-center gap-2"><span className="text-success font-bold">✓</span> 1 project per month</li>
            </ul>
            <button className="btn btn-outline btn-primary w-full font-semibold">Get Started Free</button>
          </div>

          {/* Pro Plan (Highlighted) */}
          <div className="bg-[#7c3aed] text-white rounded-xl p-8 flex flex-col shadow-xl transform md:scale-105 h-fit relative">
            <div className="absolute -top-3 right-6 badge badge-secondary font-medium">MOST POPULAR</div>
            <h3 className="text-2xl font-bold mb-2">Pro</h3>
            <p className="text-white/80 mb-6 text-sm">Best for professionals</p>
            <div className="mb-6">
              <span className="text-4xl font-bold">$29</span>
              <span className="text-white/80 font-medium">/mo</span>
            </div>
            <ul className="space-y-3 mb-8 text-sm">
              <li className="flex items-center gap-2"><span>✓</span> Access to all premium tools</li>
              <li className="flex items-center gap-2"><span>✓</span> Unlimited downloads</li>
              <li className="flex items-center gap-2"><span>✓</span> Priority 24/7 support</li>
              <li className="flex items-center gap-2"><span>✓</span> Advanced analytics</li>
            </ul>
            <button className="btn bg-white text-[#7c3aed] border-none hover:bg-slate-100 w-full font-bold">Start Pro Trial</button>
          </div>

          {/* Enterprise Plan */}
          <div className="border border-slate-200 rounded-xl p-8 flex flex-col hover:shadow-lg transition-all h-fit bg-white">
            <h3 className="text-2xl font-bold mb-2 text-slate-800">Enterprise</h3>
            <p className="text-slate-500 mb-6 text-sm">Best for large teams and agencies.</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-slate-800">$99</span>
              <span className="text-slate-400 font-medium">/mo</span>
            </div>
            <ul className="space-y-3 mb-8 text-sm text-slate-600">
              <li className="flex items-center gap-2"><span className="text-success font-bold">✓</span> Everything in Pro</li>
              <li className="flex items-center gap-2"><span className="text-success font-bold">✓</span> Dedicated account manager</li>
              <li className="flex items-center gap-2"><span className="text-success font-bold">✓</span> Custom integrations</li>
              <li className="flex items-center gap-2"><span className="text-success font-bold">✓</span> Team management</li>
            </ul>
            <button className="btn btn-outline btn-primary w-full font-semibold">Contact Sales</button>
          </div>

        </div>
        
      </div>
      
    </section>
    
  );
}
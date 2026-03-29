import React from 'react';

export default function Stats() {
  return (
    <div className="bg-primary text-white py-10 my-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        
        {/* 1st status */}
        <div className="border-b md:border-b-0 md:border-r border-white/20 pb-6 md:pb-0">
          <h2 className="text-4xl font-bold mb-2">10K+</h2>
          <p className="text-white/80 font-medium">Active Users</p>
        </div>

        {/*2st status */}
        <div className="border-b md:border-b-0 md:border-r border-white/20 pb-6 md:pb-0">
          <h2 className="text-4xl font-bold mb-2">500+</h2>
          <p className="text-white/80 font-medium">Digital Products</p>
        </div>

        {/* 3st status */}
        <div>
          <h2 className="text-4xl font-bold mb-2">$1M+</h2>
          <p className="text-white/80 font-medium">Transactions</p>
        </div>

      </div>
    </div>
  );
}
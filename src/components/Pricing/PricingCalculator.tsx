import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const PricingCalculator = () => {
  const [siteDimension, setSiteDimension] = useState('');
  const [builtUpArea, setBuiltUpArea] = useState('');
  const [totalCost, setTotalCost] = useState(0);
  const ratePerSqFt = 2222;

  useEffect(() => {
    if (builtUpArea) {
      const cost = parseFloat(builtUpArea.replace(/,/g, '')) * ratePerSqFt;
      setTotalCost(cost);
    }
  }, [builtUpArea]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-lg shadow-sm"
          >
            <h3 className="text-2xl font-bold mb-6">Tell us about your project</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  1. What is the site dimension
                </label>
                <input
                  type="text"
                  value={siteDimension}
                  onChange={(e) => setSiteDimension(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent"
                  placeholder="Enter dimension"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  2. What is the built-up area?
                </label>
                <input
                  type="text"
                  value={builtUpArea}
                  onChange={(e) => setBuiltUpArea(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF8C00] focus:border-transparent"
                  placeholder="Enter area in sq.ft"
                />
              </div>
            </div>
          </motion.div>

          {/* Cost Display */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-black text-white p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-6">Rate Per Sqft Rs.2,222</h3>
            <div className="mb-8">
              <p className="text-gray-400 mb-2">Your Estimated Cost will be</p>
              <p className="text-4xl font-bold">₹ {totalCost.toLocaleString()}</p>
            </div>
            <button className="w-full bg-[#FF8C00] text-white py-3 rounded-md hover:bg-[#e67e00] transition-colors">
              Book Consultation
            </button>
            <p className="text-xs text-gray-400 mt-4">
              This calculator is for information and reference purposes only. Estimations presented above are not guaranteed.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingCalculator;
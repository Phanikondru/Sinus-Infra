import React from 'react';
import { motion } from 'framer-motion';
import { Calculator } from 'lucide-react';

const BudgetHero = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="flex justify-center mb-6">
            <Calculator className="w-16 h-16 text-[#FF8C00]" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Construction Cost Calculator</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get an instant estimate for your construction project. Our calculator provides accurate cost projections based on your specific requirements.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BudgetHero;
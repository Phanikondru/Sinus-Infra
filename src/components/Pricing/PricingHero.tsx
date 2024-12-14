import React from 'react';
import { motion } from 'framer-motion';
import PricingIcons from './PricingIcons';

const PricingHero = () => {
  return (
    <section className="pt-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <PricingIcons />
        
        <div className="text-center mt-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-6"
          >
            Construction Pricing
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <h3 className="text-5xl font-bold mb-4">One Price, One Quality</h3>
            <p className="text-4xl font-bold text-[#002B5B] mb-6">– Rs. 2,222/sq.ft</p>
            <p className="text-gray-600">
              We believe in straightforward pricing with no hidden costs. Our rate of Rs. 2,222 per square foot includes premium quality materials and exceptional craftsmanship.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingHero;
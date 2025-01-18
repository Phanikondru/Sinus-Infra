import React from 'react';
import { motion } from 'framer-motion';

const FeaturesHero = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-4">
            Sinus Infra <span className="text-[#FF8C00]">Comparison</span>
          </h1>
          <p className="text-gray-600">For clients</p>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesHero;
import React from 'react';
import { motion } from 'framer-motion';

const TestimonialsHero = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-gray-600 mb-4"
        >
          Don't take our word for it
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl font-bold mb-12"
        >
          Hear from our clients
        </motion.h1>
      </div>
    </section>
  );
};

export default TestimonialsHero;
import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    { number: '3', label: 'Years of Experience' },
    { number: '210', label: 'Successful Projects' },
    { number: '172', label: 'Professional Experts' },
  ];

  return (
    <div className="bg-[#002B5B] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center text-white"
            >
              <span className="text-6xl font-bold block mb-2">{stat.number}</span>
              <span className="text-gray-300">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
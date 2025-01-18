import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const features = [
  'Precision and Excellence',
  'Strategic Planning for Success',
  'Innovative Solutions',
  'Industry Experts You Can Trust',
  'Transparent Pricing',
  'Award-Winning Standards'
];

const Features = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-[#002B5B] mb-8">
            Your reliable ally for<br />every construction need.
          </h2>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <Check className="text-[#FF8C00] w-5 h-5" />
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative h-[400px]"
        >
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80"
            alt="Construction Site"
            className="w-full h-full object-cover rounded-lg shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
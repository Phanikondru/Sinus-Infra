import React from 'react';
import { motion } from 'framer-motion';
import { Building, PaintBucket, Ruler, Wrench } from 'lucide-react';

const features = [
  {
    icon: Building,
    title: 'Structural Costs',
    description: 'Includes foundation, framing, and basic building materials'
  },
  {
    icon: PaintBucket,
    title: 'Finishing Costs',
    description: 'Covers painting, flooring, and interior finishes'
  },
  {
    icon: Ruler,
    title: 'Labor Costs',
    description: 'Estimates for skilled and unskilled labor requirements'
  },
  {
    icon: Wrench,
    title: 'Installation Costs',
    description: 'Plumbing, electrical, and other utility installations'
  }
];

const BudgetFeatures = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-16 text-center"
        >
          What's Included in the Estimate
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <feature.icon className="w-10 h-10 text-[#FF8C00] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BudgetFeatures;
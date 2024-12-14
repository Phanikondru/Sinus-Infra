import React from 'react';
import { motion } from 'framer-motion';
import ValueCard from './ValueCard';

interface ValueCategoryProps {
  title: string;
  values: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  index: number;
}

const ValueCategory = ({ title, values, index }: ValueCategoryProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="space-y-12"
    >
      <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {values.map((value, idx) => (
          <ValueCard
            key={idx}
            icon={value.icon}
            title={value.title}
            description={value.description}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default ValueCategory;
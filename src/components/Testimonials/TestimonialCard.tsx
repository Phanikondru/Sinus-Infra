import React from 'react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  name: string;
  text: string;
  delay: number;
}

const TestimonialCard = ({ name, text, delay }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="bg-white p-6 rounded-lg shadow-lg"
    >
      <p className="text-gray-600 mb-4">{text}</p>
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
        <span className="font-semibold">{name}</span>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
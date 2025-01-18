import React from 'react';
import { motion } from 'framer-motion';

interface ValueCardProps {
  icon: string;
  title: string;
  description: string;
}

const ValueCard = ({ icon, title, description }: ValueCardProps) => {
  return (
    <div className="bg-white p-8 rounded-lg hover:shadow-sm transition-all duration-300">
      <div className="mb-6">
        <img src={icon} alt={title} className="w-8 h-8" />
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default ValueCard;
import React from 'react';
import { motion } from 'framer-motion';

const icons = [
  // Row 1
  'worker', 'bucket', 'measure', 'drill', 'ruler-curved', 'balance', 'ruler-curved-2', 'ladder', 'elderly',
  // Row 2
  'warning', 'marker', 'ladder-2', 'tape', 'knife', 'paint-roller', 'barrier', 'worker-2', 'refresh',
  // Row 3
  'screwdriver', 'cone', 'trowel', 'dig', 'platform', 'paint', 'sign', 'ruler-curved-3', 'wheelbarrow',
  // Row 4
  'drill-2', 'climb', 'ruler-curved-4', 'screw', 'ruler-curved-5', 'sign-2', 'ruler-curved-6', 'worker-3', 'ruler-curved-7'
];

const PricingIcons = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-9 gap-4">
          {icons.map((icon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              className="aspect-square bg-gray-50 rounded-lg p-3 flex items-center justify-center"
            >
              <img
                src={`/icons/construction/${icon}.svg`}
                alt={`Construction icon ${index + 1}`}
                className="w-6 h-6 text-gray-600"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingIcons;
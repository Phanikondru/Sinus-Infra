import React from 'react';
import { motion } from 'framer-motion';

const focusAreas = [
  {
    title: 'Building Communities',
    description: 'We create spaces that unite people, from vibrant neighborhoods to bustling commercial areas, enhancing lives through thoughtful design.'
  },
  {
    title: 'Innovating for the Future',
    description: 'Innovation drives us. By leveraging advanced technologies and smart designs, we keep our projects forward-thinking.'
  },
  {
    title: 'Sustainability First',
    description: 'We prioritize eco-friendly practices, utilizing sustainable materials and energy-efficient designs to foster a greener tomorrow.'
  },
  {
    title: 'Excellence in Delivery',
    description: 'Our projects exemplify quality, maintaining high standards from start to finish for precision, durability, and client satisfaction.'
  }
];

const ServiceFocus = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-16"
        >
          Our focus
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {focusAreas.map((focus, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold">{focus.title}</h3>
              <p className="text-gray-600 leading-relaxed">{focus.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFocus;
import React from 'react';
import { motion } from 'framer-motion';

const categories = [
  {
    title: 'Architecture',
    services: [
      'Conceptual Design',
      'Building Blueprints',
      '3D Rendering',
      'Landscape Architecture',
      'Sustainable Architectural'
    ]
  },
  {
    title: 'Construction',
    services: [
      'Residential and Commercial',
      'Structural Development',
      'Framework Construction',
      'Renovation and Remodeling',
      'Eco-Friendly Construction'
    ]
  },
  {
    title: 'Interior',
    services: [
      'Space Planning and Layout',
      'Residential and Office Interiors',
      'Furniture Customization',
      'Lighting and Acoustic',
      'Biophilic Interior Designs'
    ]
  }
];

const ServiceCategories = () => {
  return (
    <section className="pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="mb-6">
                <div className="h-1 w-8 bg-[#FF8C00]" />
                <h2 className="text-2xl font-bold mt-4">{category.title}</h2>
              </div>
              <ul className="space-y-4">
                {category.services.map((service, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (index * 0.2) + (idx * 0.1) }}
                    className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    {service}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
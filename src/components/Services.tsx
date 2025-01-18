import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Architecture',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80'
    },
    {
      title: 'Construction',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80'
    },
    {
      title: 'Interior',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <div className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12 text-[#002B5B]"
        >
          Customized<br />construction solutions.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg group"
            >
              <div className="relative h-64">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Plus className="text-white w-8 h-8" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#002B5B]">{service.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
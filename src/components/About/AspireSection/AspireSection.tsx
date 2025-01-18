import React from 'react';
import { motion } from 'framer-motion';

const AspireSection = () => {
  return (
    <section className="relative h-screen">
      <div className="grid grid-cols-2 h-full">
        {/* Left Section with Text and Overlay */}
        <div className="relative">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80"
              alt="Construction Worker"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#002B5B]/80" />
          </div>
          <div className="relative z-10 flex items-center h-full">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="px-16"
            >
              <h2 className="text-5xl font-bold text-white leading-tight mb-8">
                Together, We Aspire<br />
                to Build Quality and<br />
                Excellence
              </h2>
            </motion.div>
          </div>
        </div>

        {/* Right Section with Image */}
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80"
            alt="Construction Equipment"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AspireSection;
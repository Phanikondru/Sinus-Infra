import React from 'react';
import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1481977834013-b484d1e83ed3?auto=format&fit=crop&q=80"
          alt="Construction Site at Sunset"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold text-white leading-tight"
          >
            A rich legacy and an<br />
            innovative future
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
import React from 'react';
import { motion } from 'framer-motion';

const ProjectsHero = () => {
  return (
    <section className="relative h-[70vh]">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&q=80"
          alt="Modern Architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              Our Projects Showcase Excellence in Construction
            </h1>
            <p className="text-xl text-gray-200">
              Discover our portfolio of innovative designs and successful implementations
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHero;
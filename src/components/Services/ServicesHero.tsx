import React from 'react';
import { motion } from 'framer-motion';

const ServicesHero = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-[#002B5B] leading-tight mb-16"
        >
          We are an interface design<br />
          studio that helps you make<br />
          beautiful , functional , &<br />
          innovative user experiences.
        </motion.h1>
      </div>
    </section>
  );
};

export default ServicesHero;
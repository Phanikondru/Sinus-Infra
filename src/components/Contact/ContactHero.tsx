import React from 'react';
import { motion } from 'framer-motion';

const ContactHero = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-[#002B5B] mb-6"
        >
          Get in touch
        </motion.h1>
      </div>
    </section>
  );
};

export default ContactHero;
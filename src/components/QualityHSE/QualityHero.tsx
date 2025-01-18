import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const QualityHero = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-8"
        >
          <ShieldCheck className="w-16 h-16 text-[#FF8C00]" />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold mb-6"
        >
          Establishing Quality Standards in the Industry
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-600 max-w-3xl mx-auto"
        >
          At Sinuos, we uphold the highest quality standards through extensive ISO certifications 
          and stringent quality management systems. Our dedication to excellence guarantees 
          consistent and dependable performance across all projects.
        </motion.p>
      </div>
    </section>
  );
};

export default QualityHero;
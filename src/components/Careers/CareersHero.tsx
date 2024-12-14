import React from 'react';
import { motion } from 'framer-motion';

const CareersHero = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-6"
        >
          Hiring
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 max-w-2xl"
        >
          SINUOS's recruitment is based on the requirements of the business plan together with current operational demands. We use an efficient, non-discriminatory and systematic method of recruiting and selecting the right people to fill our vacant positions.
        </motion.p>
      </div>
    </section>
  );
};

export default CareersHero;
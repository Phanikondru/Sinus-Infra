import React from 'react';
import { motion } from 'framer-motion';

const ServicePartner = () => {
  return (
    <section className="bg-[#002B5B] py-24">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white mb-8">
            Partner with industry experts - starting today
          </h2>
          
          <button className="bg-[#FF8C00] text-white px-8 py-3 rounded hover:bg-[#e67e00] transition-colors">
            Book an intro call
          </button>
          
          <p className="text-gray-400 mt-4">
            with Sinus Infra founder Santhosh
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicePartner;
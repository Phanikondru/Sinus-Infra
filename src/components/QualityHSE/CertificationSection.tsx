import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const certifications = [
  {
    title: "ISO 9001:2015 Certification",
    description: "System for Quality Management"
  },
  {
    title: "ISO 14001 Certification",
    description: "System for Environmental Management"
  },
  {
    title: "ISO 45001 Certification",
    description: "System for Occupational Health & Safety"
  },
  {
    title: "ISO 27001 Certification",
    description: "System for Information Security Management"
  }
];

const CertificationSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <Shield className="w-10 h-10 text-[#FF8C00] mb-4" />
              <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
              <p className="text-gray-600">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
import React from 'react';
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

const sustainabilityPoints = [
  "We recognize the importance of the natural environment and the significance of the ecosystem's sustainability.",
  "We fully comply with all sustainability and environmental legislations and work proactively with all levels of government, regulatory agencies and our clients to facilitate sustainability and environmental requirements in the early stages of each of our projects.",
  "We are dedicated to preventing pollution and minimizing the adverse impacts of our activities on the natural, built and cultural environment.",
  "We also reduce waste through minimization strategies and promote the efficient use of natural resources."
];

const Sustainability = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl font-bold mb-8">
            Sustainability and the Environment
          </h2>
        </motion.div>

        <div className="space-y-6">
          {sustainabilityPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start gap-4"
            >
              <Leaf className="w-6 h-6 text-[#FF8C00] flex-shrink-0 mt-1" />
              <p className="text-gray-600">{point}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
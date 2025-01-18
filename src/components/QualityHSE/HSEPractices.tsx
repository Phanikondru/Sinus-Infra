import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const practices = [
  "Ongoing training for all employees and Subcontractors to make sure they can carry out their work safely",
  "All staff are proactive in continually monitoring and reporting any new hazards so that accidents can be avoided",
  "Senior Management frequently visit the project sites to speak to workers about HSE and Welfare requirements, ensuring that resources are available to implement the Health and Safety policy completely",
  "We implement a risk-based approach in the planning and operation of our projects, seeking ways to eliminate accidents, injury and illnesses, reduce the use of energy and minimize material wastage to prevent pollution."
];

const HSEPractices = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-12"
        >
          Our HSE practices include:
        </motion.h2>

        <div className="space-y-6">
          {practices.map((practice, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start gap-4"
            >
              <CheckCircle2 className="w-6 h-6 text-[#FF8C00] flex-shrink-0 mt-1" />
              <p className="text-gray-600">{practice}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HSEPractices;
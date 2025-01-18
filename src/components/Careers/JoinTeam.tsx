import React from 'react';
import { motion } from 'framer-motion';
import { Users, CheckCircle, FileCheck, UserPlus } from 'lucide-react';

const steps = [
  {
    icon: Users,
    title: 'Sourcing & Recruitment',
    description: 'To be eligible for employment at SINUOS, applicants must fulfill all minimum requirements for education, certification, and experience.'
  },
  {
    icon: CheckCircle,
    title: 'Selection',
    description: 'We conduct thorough interviews and assessments to ensure the best fit for both the candidate and our team.'
  },
  {
    icon: FileCheck,
    title: 'Reference Check',
    description: 'We conduct reference checks to verify candidates experience, work performance, academic achievements, and professional traits.'
  },
  {
    icon: UserPlus,
    title: 'Joining',
    description: 'We offer a concise induction program for new employees during their first week, covering company information and job requirements.'
  }
];

const JoinTeam = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-16 text-center"
        >
          Why Join Our Team?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <step.icon className="w-10 h-10 text-[#FF8C00] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinTeam;
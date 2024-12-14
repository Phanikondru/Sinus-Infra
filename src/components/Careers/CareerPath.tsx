import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, GraduationCap } from 'lucide-react';

const advantages = [
  {
    icon: Award,
    title: 'Regular Performance Appraisals',
    description: 'SINUOS regularly assesses employee capabilities and areas for growth, encouraging them to lead their own development. The company supports this with financial and educational incentives like skill-based performance rewards.'
  },
  {
    icon: BookOpen,
    title: 'Further Education',
    description: 'We have a Further Education Policy which financially assists employees who wish to follow individual courses or study which are closely related to the employee\'s current or future role within the company.'
  },
  {
    icon: GraduationCap,
    title: 'Training',
    description: 'Our employees are our greatest asset, and we invest in their training to enhance their skills and foster a culture of excellence. We occasionally receive delegates at our training center for specialized courses in a classroom setting.'
  }
];

const CareerPath = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-16"
        >
          The CareerPath Advantage
        </motion.h2>

        <div className="space-y-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start gap-6"
            >
              <advantage.icon className="w-8 h-8 text-[#FF8C00] flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerPath;
import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const comparisonData = [
  {
    feature: 'Price Comparison',
    description: 'Our comprehensive price comparison tool analyzes costs, features, and customer reviews to help you make informed purchasing decisions and ensure you get the best value for your money.',
    sinuosValue: '2,222',
    competitorValue: '2,712',
    type: 'price'
  },
  {
    feature: 'Project Management',
    description: 'Our comprehensive project management system tracks deadlines, budgets, and resource allocation to ensure projects are delivered on time and within budget.',
    sinuosValue: true,
    competitorValue: false
  },
  {
    feature: 'Quality Assurance',
    description: 'We are committed to using only the highest quality materials and workmanship.',
    sinuosValue: true,
    competitorValue: false
  },
  {
    feature: 'Safety Standards',
    description: 'We are committed to providing a safe working environment for all our employees and subcontractors.',
    sinuosValue: true,
    competitorValue: false
  },
  {
    feature: 'Client Satisfaction',
    description: 'We maintain open communication with our clients throughout the project to ensure that they are informed and satisfied.',
    sinuosValue: true,
    competitorValue: false
  },
  {
    feature: 'Sustainability',
    description: 'We are committed to sustainable building practices.',
    sinuosValue: true,
    competitorValue: false
  }
];

const ComparisonTable = () => {
  return (
    <section className="pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Sinus Infra it with top-to-bottom comparison
        </motion.h2>

        <div className="grid grid-cols-12 gap-6">
          {/* Header */}
          <div className="col-span-6"></div>
          <div className="col-span-3 text-center font-semibold">Sinus Infra</div>
          <div className="col-span-3 text-center font-semibold">Competitors</div>

          {/* Comparison Rows */}
          {comparisonData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="contents"
            >
              <div className="col-span-6 space-y-2">
                <h3 className="font-semibold">{item.feature}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
              
              <div className="col-span-3 flex justify-center items-start">
                {item.type === 'price' ? (
                  <span className="text-[#00A651] font-semibold">{item.sinuosValue}</span>
                ) : (
                  <Check className="text-[#00A651] w-6 h-6" />
                )}
              </div>
              
              <div className="col-span-3 flex justify-center items-start">
                {item.type === 'price' ? (
                  <span className="text-[#6366F1] font-semibold">{item.competitorValue}</span>
                ) : (
                  <X className="text-[#DC2626] w-6 h-6" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
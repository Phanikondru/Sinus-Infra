import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const features = {
  architecture: [
    'Archicture/Architectural Layout | 2D',
    'Architectural Visualisation | 3D',
    'Structural Design',
    '2DBasic Elevation',
    '3D Elevation',
    'Electrical Drawings',
    'Plumbing Drawings',
    'Furniture Plan'
  ],
  structure: [
    'Steel - JSW steel, TATA or equivalent',
    'Aggregates: 20mm & 40mm',
    'Blocks - Standard Solid Concrete blocks, 6 inch 4 inch',
    'Cement - ACC, Birla or equivalent of Grade - 43 or 53',
    'RCC Design Mix - As per the structural designer recommendation',
    'Ceiling Height - 10 feet (Finished Floor level)'
  ]
};

const FeatureSection = ({ title, items }: { title: string; items: string[] }) => (
  <div className="mb-12">
    <h3 className="text-3xl font-bold mb-8">{title}</h3>
    <div className="grid gap-4">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex items-center gap-3"
        >
          <div className="flex-shrink-0">
            <Check className="w-5 h-5 text-[#FF8C00]" />
          </div>
          <span>{item}</span>
        </motion.div>
      ))}
    </div>
  </div>
);

const PricingFeatures = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16">
          <FeatureSection title="Architecture" items={features.architecture} />
          <FeatureSection title="Structure" items={features.structure} />
        </div>
      </div>
    </section>
  );
};

export default PricingFeatures;
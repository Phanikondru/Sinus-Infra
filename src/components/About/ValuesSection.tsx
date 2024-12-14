import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users2, Lightbulb, MessageSquare, Clock, Leaf } from 'lucide-react';
import ValueCard from './ValueCard';

const values = [
  {
    icon: Building2,
    title: "Innovative Planning",
    description: "We focus on creative and strategic planning to craft solutions that align with your vision and industry standards."
  },
  {
    icon: Users2,
    title: "Collaborative Partnerships",
    description: "We work closely with clients, architects, and engineers to bring ideas to life."
  },
  {
    icon: Lightbulb,
    title: "Future-Ready Approach",
    description: "We integrate modern technology and forward-thinking to create structures that stand the test of time."
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    description: "Open and honest communication keeps you informed at every stage of the project."
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Timely completion without compromising quality is our promise to every client."
  },
  {
    icon: Leaf,
    title: "Sustainable Solutions",
    description: "We prioritize environmentally friendly practices for a lasting positive impact."
  }
];

const ValuesSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Our Values
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
import React from 'react';
import { motion } from 'framer-motion';
import ValueCategory from './ValueCategory';

const valueCategories = [
  {
    title: "Think",
    values: [
      {
        icon: "/icons/innovative-planning.svg",
        title: "Innovative Planning",
        description: "We focus on creative and strategic planning to craft solutions that align with your vision and industry standards."
      },
      {
        icon: "/icons/tailored-designs.svg",
        title: "Tailored Designs",
        description: "Each project is customized to meet unique requirements, ensuring functionality and sustainability."
      },
      {
        icon: "/icons/future-ready.svg",
        title: "Future-Ready Approach",
        description: "We integrate modern technology and forward-thinking to create structures that stand the test of time."
      }
    ]
  },
  {
    title: "Engage",
    values: [
      {
        icon: "/icons/transparent-communication.svg",
        title: "Transparent Communication",
        description: "Open and honest communication keeps you informed at every stage of the project."
      },
      {
        icon: "/icons/collaboration.svg",
        title: "Collaborative Partnerships",
        description: "We work closely with clients, architects, and engineers to bring ideas to life."
      },
      {
        icon: "/icons/community.svg",
        title: "Community Focus",
        description: "Building not just structures but relationships that foster trust and collaboration."
      }
    ]
  },
  {
    title: "Deliver",
    values: [
      {
        icon: "/icons/excellence.svg",
        title: "Excellence in Execution",
        description: "Precision and attention to detail ensure each project is delivered to the highest standards."
      },
      {
        icon: "/icons/on-time.svg",
        title: "On-Time Delivery",
        description: "Timely completion without compromising quality is our promise to every client."
      },
      {
        icon: "/icons/sustainable.svg",
        title: "Sustainable Solutions",
        description: "We prioritize environmentally friendly practices for a lasting positive impact."
      }
    ]
  }
];

const ValuesSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-base text-gray-600 mb-16"
        >
          Our Values
        </motion.p>

        <div className="space-y-24">
          {valueCategories.map((category, index) => (
            <ValueCategory
              key={index}
              title={category.title}
              values={category.values}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
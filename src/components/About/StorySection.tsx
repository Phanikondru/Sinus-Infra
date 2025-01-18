import React from 'react';
import { motion } from 'framer-motion';

const storyItems = [
  {
    title: "Our story",
    content: "Sinuos Infra began with a mission to deliver innovative construction solutions, growing from a local venture in India to a global presence."
  },
  {
    title: "Today",
    content: "We are a trusted name in construction with operations spanning India, Russia, South Africa, and Nigeria, delivering excellence across every project."
  },
  {
    title: "A glimpse ahead",
    content: "Our vision is to lead the industry with sustainable practices, innovative designs, and a commitment to building a better future."
  }
];

const StorySection = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-16">
          {storyItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-bold text-[#002B5B]">{item.title}</h2>
              <p className="text-gray-600 leading-relaxed text-lg">{item.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StorySection;
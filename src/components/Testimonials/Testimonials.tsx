import React from 'react';
import { motion } from 'framer-motion';
import TwitterTestimonial from './TwitterTestimonial';

const testimonials = [
  {
    name: "Maya Patel",
    handle: "mayapatel",
    content: "Sinus Infra transformed our dated house into a breathtaking contemporary haven. Their innovative designs and impeccable craftsmanship exceeded all our expectations.\n\nFrom the moment we started working with them, it was clear that they were dedicated to bringing our vision to life. Every detail was carefully considered, resulting in a space that is not only beautiful but also functional."
  },
  {
    name: "Arjun Mehta",
    handle: "arjunmehta",
    content: "The team at Sinus Infra transformed the construction experience into a seamless journey, ensuring that every step was executed with precision and care.\n\nTheir commitment to excellence was evident from the very beginning, as they took the time to understand our vision and requirements.Throughout the project, the Sinus Infra team maintained open lines of communication, promptly addressing any questions or concerns that arose."
  },
  {
    name: "Priya Sharma",
    handle: "priyasharma",
    content: "The attention to detail and quality of work at Sinus Infra is truly impressive. Our new home is a testament to their expertise."
  },
  {
    name: "Aarav Mehta",
    handle: "aaravmehta",
    content: "Sinus Infra consistently exceeded our expectations. They delivered a beautiful, functional space that we love."
  },
  {
    name: "Kiran Patel",
    handle: "kiranpatel",
    content: "Sinus Infra completed our project on time and within budget. Their efficiency and professionalism were commendable."
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-start mb-12">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-sm text-gray-600 mb-4"
            >
              Don't take our word for it
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-bold"
            >
              Hear from our clients
            </motion.h2>
          </div>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-900 transition-colors"
          >
            Read all testimonials
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <TwitterTestimonial
              key={index}
              name={testimonial.name}
              handle={testimonial.handle}
              content={testimonial.content}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
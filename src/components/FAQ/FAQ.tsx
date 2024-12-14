import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FAQItem from './FAQItem';

const faqItems = [
  {
    question: "How do you ensure the quality of construction?",
    answer: "We maintain strict quality control measures throughout the construction process, including regular inspections, material testing, and adherence to international building standards. Our team of experienced professionals oversees every aspect of construction to ensure excellence."
  },
  {
    question: "Can you help with permits and regulatory approvals?",
    answer: "Yes, we handle all necessary permits and regulatory approvals as part of our comprehensive service. Our experienced team manages the entire process, from initial applications to final approvals, ensuring compliance with local regulations."
  },
  {
    question: "How do you handle cost overruns?",
    answer: "We implement strict cost control measures and provide detailed estimates upfront. Regular project monitoring and transparent communication help prevent unexpected costs. If any changes are needed, we discuss them with you before proceeding."
  },
  {
    question: "Can you provide a detailed breakdown of the costs?",
    answer: "Yes, we provide comprehensive cost breakdowns that include materials, labor, permits, and other expenses. Our transparent pricing ensures you understand every aspect of the project budget."
  },
  {
    question: "What kind of safety measures do you take during construction?",
    answer: "Safety is our top priority. We implement comprehensive safety protocols, regular training sessions, and maintain strict compliance with occupational safety regulations. All our sites are equipped with necessary safety equipment and monitored regularly."
  },
  {
    question: "Can I make changes to the design during the construction phase?",
    answer: "Yes, we understand that requirements may evolve. We accommodate design changes during construction, though we recommend finalizing major decisions early to avoid delays and additional costs. Our team will work with you to implement changes efficiently."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:sticky lg:top-24 lg:h-fit"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Your questions<br />answered
            </h2>
            <p className="text-gray-600">
              Find answers to commonly asked questions about our construction services, processes, and standards.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
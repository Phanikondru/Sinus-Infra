import React from 'react';
import { motion } from 'framer-motion';
import { Twitter } from 'lucide-react';

interface Testimonial {
  name: string;
  handle: string;
  content: string;
  verified: boolean;
}

const testimonials: Testimonial[] = [
  {
    name: "Maya Patel",
    handle: "mayapatel",
    verified: true,
    content: "Sinus Infra transformed our dated house into a breathtaking contemporary haven. Their innovative designs and impeccable craftsmanship exceeded all our expectations.\n\nFrom the moment we started working with them, it was clear that they were dedicated to bringing our vision to life. Every detail was carefully considered, resulting in a space that is not only beautiful but also functional."
  },
  {
    name: "Arjun Mehta",
    handle: "arjunmehta",
    verified: true,
    content: "The team at Sinus Infra transformed the construction experience into a seamless journey, ensuring that every step was executed with precision and care.\n\nTheir commitment to excellence was evident from the very beginning, as they took the time to understand our vision and requirements. Throughout the project, the Sinus Infra team maintained open lines of communication, promptly addressing any questions or concerns that arose."
  },
  {
    name: "Priya Sharma",
    handle: "priyasharma",
    verified: true,
    content: "The attention to detail and quality of work at Sinus Infra is truly impressive. Our new home is a testament to their expertise."
  },
  {
    name: "Aarav Mehta",
    handle: "aaravmehta",
    verified: true,
    content: "Sinus Infra consistently exceeded our expectations. They delivered a beautiful, functional space that we love."
  },
  {
    name: "Kiran Patel",
    handle: "kiranpatel",
    verified: true,
    content: "Sinus Infra completed our project on time and within budget. Their efficiency and professionalism were commendable."
  },
  {
    name: "Anika Verma",
    handle: "anikaverma",
    verified: true,
    content: "The dedicated team behind our project transformed our vision into reality. Their exceptional creativity and innovative concepts set our initiative apart from the rest.\n\nWith a focus on collaboration and open communication, they ensured that every idea was explored and refined, resulting in a truly unique outcome. Their ability to think outside the box allowed us to push boundaries and achieve something remarkable.\n\nIn the end, the project not only met our expectations but exceeded them, showcasing the power of imagination and teamwork in bringing a concept to life."
  },
  {
    name: "Rohan Mehta",
    handle: "rohanmehta",
    verified: true,
    content: "Sinus Infra was not merely a contractor; they became an invaluable partner throughout our project. Their collaborative spirit truly set them apart, as they consistently engaged with us to understand our vision.\n\nWe were particularly impressed by their openness to our ideas and suggestions. This willingness to listen and adapt made the entire process smoother and more enjoyable."
  },
  {
    name: "Soha Khan",
    handle: "sohakhan",
    verified: true,
    content: "If you're in search of a construction company that embodies reliability, professionalism, and creativity, look no further than Sinus Infra. Their commitment to excellence ensures that every project is executed with precision and care, making them a top choice for clients.\n\nSinus Infra stands out in the construction industry, not just for their technical skills but also for their innovative approach to building. With a team of dedicated professionals, they transform visions into reality, delivering results that exceed expectations."
  }
];

const TestimonialsList = () => {
  return (
    <section className="pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full" />
                  <div>
                    <div className="flex items-center gap-1">
                      <p className="font-medium text-gray-900">{testimonial.name}</p>
                      {testimonial.verified && (
                        <svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
                        </svg>
                      )}
                    </div>
                    <p className="text-gray-500 text-sm">@{testimonial.handle}</p>
                  </div>
                </div>
                <Twitter className="w-5 h-5 text-gray-400" />
              </div>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsList;
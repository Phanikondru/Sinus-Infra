import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Home, Lightbulb, Sofa, CheckCircle, Briefcase, Target } from 'lucide-react';
import Button from '../../components/common/Button';
import FAQ from '../../components/services/FAQ';
import Breadcrumbs from '../../components/common/Breadcrumbs';

const interiorFAQs = [
  {
    question: "What interior design services do you offer?",
    answer: "We offer comprehensive interior design services including space planning, material selection, furniture design, and styling."
  },
  {
    question: "How long does an interior design project take?",
    answer: "Project timelines vary based on scope, but typically range from 4-12 weeks for residential projects."
  },
  {
    question: "Do you work with existing furniture?",
    answer: "Yes, we can incorporate existing pieces into new designs and suggest complementary additions."
  },
  {
    question: "How do you handle project budgeting?",
    answer: "We work within your budget constraints and provide detailed cost breakdowns for transparency."
  },
  {
    question: "Can you source furniture and materials?",
    answer: "Yes, we have extensive supplier networks and can handle all procurement needs."
  }
];

const Interior = () => {
  return (
    <main className="pt-16">
      <Breadcrumbs />
      {/* Hero Section */}
      <section className="relative h-[70vh]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80"
            alt="Interior Design"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl font-bold text-white mb-6">
                Transform Your Space
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Creating beautiful, functional interiors that reflect your style and enhance your life.
              </p>
              <Button>Start Your Project</Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Our Interior Design Services
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Residential Interiors",
                description: "Creating comfortable and stylish living spaces",
                image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80"
              },
              {
                title: "Commercial Spaces",
                description: "Designing productive work environments",
                image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80"
              },
              {
                title: "Retail Design",
                description: "Creating engaging shopping experiences",
                image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Our Design Process
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Home,
                title: "Space Planning",
                description: "Optimizing layout and flow"
              },
              {
                icon: Palette,
                title: "Design Concept",
                description: "Developing your unique style"
              },
              {
                icon: Lightbulb,
                title: "Material Selection",
                description: "Choosing perfect finishes"
              },
              {
                icon: Sofa,
                title: "Final Styling",
                description: "Adding finishing touches"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mb-6 inline-block p-4 bg-white rounded-full shadow-sm">
                  <step.icon className="w-8 h-8 text-[#FF8C00]" />
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Material Selection */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Premium Materials
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Natural Stone",
                description: "Premium marble and granite selections",
                image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80"
              },
              {
                title: "Hardwood",
                description: "Sustainable wood varieties",
                image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80"
              },
              {
                title: "Textiles",
                description: "Luxury fabrics and upholstery",
                image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80"
              }
            ].map((material, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={material.image}
                    alt={material.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{material.title}</h3>
                <p className="text-gray-600">{material.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Style Guide */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Design Styles
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Briefcase,
                title: "Contemporary",
                description: "Modern aesthetics with clean lines"
              },
              {
                icon: Target,
                title: "Traditional",
                description: "Classic designs with timeless appeal"
              },
              {
                icon: Lightbulb,
                title: "Minimalist",
                description: "Simplified elegance and functionality"
              }
            ].map((style, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-sm"
              >
                <style.icon className="w-12 h-12 text-[#FF8C00] mb-6" />
                <h3 className="text-xl font-bold mb-4">{style.title}</h3>
                <p className="text-gray-600">{style.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-4xl font-bold mb-6">Sustainable Design</h2>
              <p className="text-gray-600 mb-8">
                We prioritize eco-friendly materials and sustainable practices in all our interior design projects.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-[#FF8C00] w-5 h-5" />
                  <span>Eco-friendly Materials</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-[#FF8C00] w-5 h-5" />
                  <span>Energy-efficient Lighting</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-[#FF8C00] w-5 h-5" />
                  <span>Recycled Components</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-[#FF8C00] w-5 h-5" />
                  <span>Low VOC Finishes</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative h-[400px]"
            >
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80"
                alt="Sustainable Interior Design"
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ questions={interiorFAQs} />

      {/* CTA Section */}
      <section className="py-24 bg-[#002B5B] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-gray-300 mb-8">
              Let's create beautiful interiors that reflect your style and enhance your life.
            </p>
            <Button>Schedule Consultation</Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Interior;
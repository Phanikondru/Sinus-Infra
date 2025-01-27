import React from 'react';
import { motion } from 'framer-motion';
import { Ruler, CheckCircle, Users, Award, Briefcase, Target, Lightbulb } from 'lucide-react';
import Button from '../../components/common/Button';
import FAQ from '../../components/services/FAQ';
import Breadcrumbs from '../../components/common/Breadcrumbs';

const architectureFAQs = [
  {
    question: "What architectural services do you offer?",
    answer: "We offer a comprehensive range of architectural services including conceptual design, detailed planning, 3D visualization, construction documentation, and project supervision."
  },
  {
    question: "How long does the architectural design process take?",
    answer: "The timeline varies depending on project complexity, but typically ranges from 2-6 months for design development and documentation."
  },
  {
    question: "Do you handle building permits and approvals?",
    answer: "Yes, we manage all necessary permits and regulatory approvals as part of our comprehensive service."
  },
  {
    question: "What sustainable design practices do you implement?",
    answer: "We incorporate energy-efficient designs, sustainable materials, and environmentally conscious solutions in all our projects."
  },
  {
    question: "How do you ensure design quality?",
    answer: "We follow a rigorous quality control process, including multiple design reviews, detailed documentation, and regular client consultations."
  }
];

const Architecture = () => {
  return (
    <main className="pt-16">
      <Breadcrumbs />
      {/* Hero Section */}
      <section className="relative h-[70vh]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80"
            alt="Architecture"
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
                Architectural Excellence
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Creating spaces that inspire, function, and endure through innovative design solutions.
              </p>
              <Button>Start Your Project</Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-4xl font-bold mb-6">Comprehensive Architectural Services</h2>
              <p className="text-gray-600 mb-8">
                Our architectural services blend creativity with functionality, delivering designs that exceed expectations while maintaining practicality and sustainability.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-[#FF8C00] w-5 h-5" />
                  <span>Conceptual Design Development</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-[#FF8C00] w-5 h-5" />
                  <span>3D Visualization & Rendering</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-[#FF8C00] w-5 h-5" />
                  <span>Construction Documentation</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-[#FF8C00] w-5 h-5" />
                  <span>Sustainable Design Solutions</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative h-[400px]"
            >
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80"
                alt="Architectural Design"
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
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
                icon: Ruler,
                title: "Initial Consultation",
                description: "Understanding your vision and requirements"
              },
              {
                icon: Users,
                title: "Concept Development",
                description: "Creating preliminary designs and visualizations"
              },
              {
                icon: Award,
                title: "Design Refinement",
                description: "Iterating and perfecting the design"
              },
              {
                icon: CheckCircle,
                title: "Final Documentation",
                description: "Preparing detailed construction documents"
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

      {/* Portfolio Showcase */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Featured Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Modern Office Complex",
                location: "Bangalore",
                image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80"
              },
              {
                title: "Luxury Residential Tower",
                location: "Mumbai",
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
              },
              {
                title: "Cultural Center",
                location: "Delhi",
                image: "https://images.unsplash.com/photo-1498354178607-a79df2916198?auto=format&fit=crop&q=80"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.location}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Our Expertise
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Briefcase,
                title: "Commercial Architecture",
                description: "Creating efficient and inspiring workspaces"
              },
              {
                icon: Target,
                title: "Residential Design",
                description: "Crafting beautiful living spaces"
              },
              {
                icon: Lightbulb,
                title: "Sustainable Solutions",
                description: "Eco-friendly architectural innovations"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-sm"
              >
                <item.icon className="w-12 h-12 text-[#FF8C00] mb-6" />
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-4xl font-bold mb-6">Advanced Architectural Technology</h2>
              <p className="text-gray-600 mb-8">
                We utilize cutting-edge technology and software to deliver precise, innovative designs and seamless project execution.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-[#FF8C00] w-5 h-5" />
                  <span>3D Modeling & BIM Technology</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-[#FF8C00] w-5 h-5" />
                  <span>Virtual Reality Presentations</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-[#FF8C00] w-5 h-5" />
                  <span>Energy Analysis Software</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-[#FF8C00] w-5 h-5" />
                  <span>Project Management Tools</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative h-[400px]"
            >
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80"
                alt="Architectural Technology"
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ questions={architectureFAQs} />

      {/* CTA Section */}
      <section className="py-24 bg-[#002B5B] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Architectural Journey?
            </h2>
            <p className="text-gray-300 mb-8">
              Let's create something extraordinary together. Contact us to discuss your project.
            </p>
            <Button>Get in Touch</Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Architecture;
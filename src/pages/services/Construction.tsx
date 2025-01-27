import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Shield, Clock, Wrench, CheckCircle, Briefcase, Target, Lightbulb } from 'lucide-react';
import Button from '../../components/common/Button';
import FAQ from '../../components/services/FAQ';
import Breadcrumbs from '../../components/common/Breadcrumbs';

const constructionFAQs = [
  {
    question: "What types of construction projects do you handle?",
    answer: "We handle a wide range of projects including residential, commercial, industrial, and infrastructure construction."
  },
  {
    question: "How do you ensure project quality and safety?",
    answer: "We maintain strict quality control measures and follow comprehensive safety protocols throughout the construction process."
  },
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary based on scope and complexity, but we provide detailed schedules during the planning phase."
  },
  {
    question: "Do you handle all necessary permits and approvals?",
    answer: "Yes, we manage all required construction permits and regulatory approvals as part of our service."
  },
  {
    question: "How do you handle project cost management?",
    answer: "We provide detailed cost estimates and maintain transparent communication about expenses throughout the project."
  }
];

const Construction = () => {
  return (
    <main className="pt-16">
      <Breadcrumbs />
      {/* Hero Section */}
      <section className="relative h-[70vh]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80"
            alt="Construction Site"
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
                Building Excellence
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Delivering quality construction with precision, safety, and innovation.
              </p>
              <Button>Start Your Project</Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-4xl font-bold mb-6">Construction Excellence</h2>
              <p className="text-gray-600 mb-8">
                Our construction services combine cutting-edge technology with traditional craftsmanship to deliver outstanding results.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  "Residential Construction",
                  "Commercial Buildings",
                  "Industrial Facilities",
                  "Infrastructure Projects",
                  "Renovation Services",
                  "Project Management"
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-2 h-2 bg-[#FF8C00] rounded-full" />
                    <span>{service}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
                <p className="text-gray-600">
                  Rigorous quality control measures ensure every project meets our high standards.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Safety First</h3>
                <p className="text-gray-600">
                  Comprehensive safety protocols protect workers and maintain site security.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Timely Delivery</h3>
                <p className="text-gray-600">
                  Efficient project management ensures on-time completion within budget.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Why Choose Us
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Building2,
                title: "Expert Team",
                description: "Skilled professionals with years of experience"
              },
              {
                icon: Shield,
                title: "Quality Materials",
                description: "Using only the highest quality construction materials"
              },
              {
                icon: Clock,
                title: "Timely Delivery",
                description: "Completing projects on schedule"
              },
              {
                icon: Wrench,
                title: "Modern Equipment",
                description: "Latest construction technology and equipment"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mb-6 inline-block p-4 bg-white rounded-full shadow-sm">
                  <feature.icon className="w-8 h-8 text-[#FF8C00]" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Recent Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Commercial Complex",
                location: "Bangalore",
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
              },
              {
                title: "Residential Tower",
                location: "Mumbai",
                image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80"
              },
              {
                title: "Industrial Facility",
                location: "Chennai",
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

      {/* Equipment Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Advanced Equipment
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Briefcase,
                title: "Heavy Machinery",
                description: "State-of-the-art construction equipment"
              },
              {
                icon: Target,
                title: "Precision Tools",
                description: "Advanced measurement and execution tools"
              },
              {
                icon: Lightbulb,
                title: "Safety Equipment",
                description: "Comprehensive safety gear and systems"
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

      {/* Safety Standards */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-4xl font-bold mb-6">Safety Standards & Compliance</h2>
              <p className="text-gray-600 mb-8">
                We maintain the highest safety standards in the industry, ensuring protection for our workers and project sites.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-[#FF8C00] w-5 h-5" />
                  <span>Regular Safety Training</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-[#FF8C00] w-5 h-5" />
                  <span>Site Safety Inspections</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-[#FF8C00] w-5 h-5" />
                  <span>Emergency Response Plans</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-[#FF8C00] w-5 h-5" />
                  <span>Compliance Documentation</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative h-[400px]"
            >
              <img
                src="https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&q=80"
                alt="Construction Safety"
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ questions={constructionFAQs} />

      {/* CTA Section */}
      <section className="py-24 bg-[#002B5B] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Build Your Dream Project?
            </h2>
            <p className="text-gray-300 mb-8">
              Contact us today to discuss your construction needs and get a detailed quote.
            </p>
            <Button>Get Started</Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Construction;
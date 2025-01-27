import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, BookOpen, GraduationCap, Briefcase, Target, Heart, Zap } from 'lucide-react';
import CareerForm from '../components/Careers/CareerForm';

const Careers = () => {
  const benefits = [
    {
      icon: Award,
      title: "Competitive Salary",
      description: "We offer industry-leading compensation packages that recognize and reward your expertise."
    },
    {
      icon: Heart,
      title: "Health Benefits",
      description: "Comprehensive health insurance coverage for you and your family's wellbeing."
    },
    {
      icon: BookOpen,
      title: "Learning & Development",
      description: "Continuous learning opportunities through training programs and skill development."
    },
    {
      icon: Target,
      title: "Growth Opportunities",
      description: "Clear career progression paths and opportunities for advancement."
    },
    {
      icon: Zap,
      title: "Work-Life Balance",
      description: "Flexible work arrangements and paid time off to help you maintain balance."
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Join a team that values innovation, creativity, and mutual support."
    }
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[70vh]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&q=80"
            alt="Team Collaboration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl font-bold text-white mb-6">
                Join Our Team of Innovators
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Be part of a dynamic team that's shaping the future of construction and architecture.
              </p>
              <button className="bg-[#FF8C00] text-white px-8 py-3 rounded-md hover:bg-[#e67e00] transition-colors">
                View Open Positions
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why Join Us?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer more than just a job. Join us for a rewarding career with excellent benefits and growth opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <benefit.icon className="w-12 h-12 text-[#FF8C00] mb-6" />
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Path Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-4xl font-bold mb-6">Your Growth Path</h2>
              <p className="text-gray-600 mb-8">
                We believe in nurturing talent and providing clear paths for career advancement. Our structured development program ensures you have the support and opportunities to reach your full potential.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <Briefcase className="w-6 h-6 text-[#FF8C00]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Professional Development</h3>
                    <p className="text-gray-600">Structured training programs and mentorship opportunities.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <GraduationCap className="w-6 h-6 text-[#FF8C00]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Education Support</h3>
                    <p className="text-gray-600">Financial assistance for further education and certifications.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative h-[400px]"
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
                alt="Career Growth"
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Apply Now</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Take the first step towards an exciting career with us. Fill out the application form below and we'll get back to you soon.
            </p>
          </motion.div>
          <CareerForm />
        </div>
      </section>
    </main>
  );
};

export default Careers;
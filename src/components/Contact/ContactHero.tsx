import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import ContactForm from './ContactForm';

const ContactHero = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h1 className="text-5xl font-bold text-[#002B5B]">
              Get in touch
            </h1>
            <p className="text-gray-600 text-lg">
              Have a question or want to discuss a project? We're here to help.
            </p>
            <div className="space-y-6 pt-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <Mail className="w-6 h-6 text-[#FF8C00]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email us at</p>
                  <a href="mailto:info@sinuosinfra.in" className="text-gray-900 hover:text-[#FF8C00] transition-colors">
                    info@sinuosinfra.in
                  </a>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-4"
              >
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <Phone className="w-6 h-6 text-[#FF8C00]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Call us at</p>
                  <a href="tel:+918722223081" className="text-gray-900 hover:text-[#FF8C00] transition-colors">
                    +91 87222 23081
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-4"
              >
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <MapPin className="w-6 h-6 text-[#FF8C00]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Visit our office</p>
                  <p className="text-gray-900">
                    Ground Floor, SINUOS INFRA PVT LTD,<br />
                    Beech, MANYATA EMBASSY BUSINESS PARK,<br />
                    E-1, Thanisandra, Bengaluru, Karnataka 560045
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-4"
              >
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <Clock className="w-6 h-6 text-[#FF8C00]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Business Hours</p>
                  <p className="text-gray-900">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
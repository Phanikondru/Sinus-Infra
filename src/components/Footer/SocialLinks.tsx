import React from 'react';
import { Linkedin, Twitter, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' }
];

const SocialLinks = () => {
  return (
    <div className="flex space-x-4">
      {socialLinks.map((social, index) => (
        <motion.a
          key={index}
          href={social.href}
          aria-label={social.label}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white transition-colors"
        >
          <social.icon className="w-5 h-5" />
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface FooterSection {
  title: string;
  links: { label: string; href: string; }[];
}

const sections: FooterSection[] = [
  {
    title: 'Services',
    links: [
      { label: 'Architecture', href: '/services' },
      { label: 'Construction', href: '/services' },
      { label: 'Interior', href: '/services' }
    ]
  },
  {
    title: 'Other',
    links: [
      { label: 'Quality & HSE', href: '/quality-hse' },
      { label: 'Careers', href: '/careers' }
    ]
  },
  {
    title: 'Visit us',
    links: [
      { label: 'India - Bangalore', href: '#' },
      { label: 'South Africa', href: '#' }
    ]
  }
];

const FooterLinks = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {sections.map((section, sectionIndex) => (
        <motion.div
          key={sectionIndex}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: sectionIndex * 0.1 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
          <ul className="space-y-2">
            {section.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                {link.href.startsWith('/') ? (
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
};

export default FooterLinks;
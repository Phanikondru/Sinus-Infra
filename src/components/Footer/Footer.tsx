import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from '../common/Logo';
import XLogo from '../common/XLogo';

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Logo and Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <div className="mb-8 md:mb-0">
            <div className="mb-6">
              <Logo className="[&_path]:fill-white" />
            </div>
            <div className="inline-flex">
              <div className="bg-[#1F2937] px-4 py-2 rounded-md border border-gray-700">
                <span className="text-sm font-medium bg-gradient-to-r from-blue-500 to-[#DC9700] bg-clip-text text-transparent">
                  Trusted Construction Partner
                </span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#1F2937] p-2 rounded-full text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#1F2937] p-2 rounded-full text-gray-400 hover:text-white transition-colors"
            >
              <XLogo className="w-5 h-5" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#1F2937] p-2 rounded-full text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/architecture" className="text-gray-400 hover:text-white transition-colors">Architecture</Link></li>
              <li><Link to="/services/construction" className="text-gray-400 hover:text-white transition-colors">Construction</Link></li>
              <li><Link to="/services/interior" className="text-gray-400 hover:text-white transition-colors">Interior</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Other</h3>
            <ul className="space-y-2">
              <li><Link to="/quality-hse" className="text-gray-400 hover:text-white transition-colors">Quality & HSE</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Visit us</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-white mb-2">India - Bangalore</h4>
                <p className="text-gray-400 text-sm">
                  Ground Floor, SINUOS INFRA PVT LTD,<br />
                  Beech, MANYATA EMBASSY BUSINESS<br />
                  PARK, E-1, Thanisandra, Bengaluru,<br />
                  Karnataka 560045
                </p>
              </div>
              <div>
                <h4 className="text-white mb-2">South Africa</h4>
                <p className="text-gray-400 text-sm">
                  Block B, North Park, Black River Park,<br />
                  Observatory 7925 South Africa.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="text-center text-gray-400 text-sm">
            <p>From <span className="text-gray-300">Sole Autumn Leaf</span></p>
            <p>© 2024 - Sinus Infra. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
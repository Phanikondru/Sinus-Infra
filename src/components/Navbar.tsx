import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Menu, X, Home, Info, Briefcase, DollarSign, Star, MessageSquare, Calculator, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './common/Logo';
import CountryFlags from './common/CountryFlags';
import Button from './common/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { icon: Home, label: 'About', path: '/about' },
    { icon: Briefcase, label: 'Services', path: '/services' },
    { icon: Star, label: 'Projects', path: '/projects' },
    { icon: DollarSign, label: 'Pricing', path: '/pricing' },
    { icon: Info, label: 'Features', path: '/features' },
    { icon: MessageSquare, label: 'Testimonials', path: '/testimonials' },
    { icon: Calculator, label: 'Budget calculator', path: '/budget-calculator' },
  ];

  return (
    <>
      <CountryFlags />
      <nav
        className={`fixed w-full z-50 transition-all duration-300 top-[40px] ${
          scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Logo size="md" />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className={`flex items-center space-x-1 transition-colors ${
                    location.pathname === item.path ? 'text-[#DC9700]' : 'hover:text-[#DC9700]'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden lg:block"
          >
            <Link to="/contact">
              <Button>Contact us</Button>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="px-4 py-2">
              {menuItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-2 py-3 transition-colors ${
                      location.pathname === item.path ? 'text-[#DC9700]' : 'hover:text-[#DC9700]'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <Button fullWidth>Contact us</Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { useScrollPosition } from '../hooks/useScrollPosition';

const FloatingButtons = () => {
  const scrollPosition = useScrollPosition();
  const isVisible = scrollPosition > 300;

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/918722223081?text=Hi', '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="bg-[#FF8C00] text-white p-3 rounded-full shadow-lg hover:bg-[#e67e00] transition-colors"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={handleWhatsAppClick}
          className="bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-[#20BD5C] transition-colors"
        >
          <MessageCircle className="w-6 h-6" />
        </motion.button>
      </AnimatePresence>
    </div>
  );
};

export default FloatingButtons;
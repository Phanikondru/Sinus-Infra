import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface NavMenuItemProps {
  item: {
    icon: LucideIcon;
    label: string;
    path: string;
  };
  index: number;
  isActive: boolean;
}

const NavMenuItem = ({ item, index, isActive }: NavMenuItemProps) => {
  const Icon = item.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={item.path}
        className={`flex items-center space-x-1 transition-colors ${
          isActive ? 'text-[#FF8C00]' : 'hover:text-[#FF8C00]'
        }`}
      >
        <Icon className="w-4 h-4" />
        <span>{item.label}</span>
      </Link>
    </motion.div>
  );
};

export default NavMenuItem;
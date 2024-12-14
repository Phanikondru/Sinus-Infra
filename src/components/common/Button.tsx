import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

const Button = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  icon,
  className = '',
  ...props 
}: ButtonProps) => {
  const baseStyles = "px-6 py-3 rounded-md transition-all duration-300 font-medium";
  const variantStyles = {
    primary: "bg-[#DC9700] hover:bg-[#c48600] text-white",
    secondary: "bg-black hover:bg-gray-900 text-white"
  };
  const widthStyles = fullWidth ? "w-full" : "";

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variantStyles[variant]} ${widthStyles} ${className} flex items-center justify-center gap-2`}
      {...props}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </motion.button>
  );
};

export default Button;
import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';

interface CalculatorResultProps {
  totalCost: number;
  baseRate: number;
  builtUpArea: string;
}

const CalculatorResult = ({ totalCost, baseRate, builtUpArea }: CalculatorResultProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-black text-white p-8 rounded-lg"
    >
      <h3 className="text-2xl font-bold mb-6">Estimated Cost</h3>
      <div className="mb-8">
        <p className="text-gray-400 mb-2">Total Estimated Cost</p>
        <p className="text-4xl font-bold">₹ {totalCost.toLocaleString()}</p>
      </div>
      <div className="space-y-4">
        <p className="text-sm text-gray-400">
          Base rate: ₹{baseRate}/sq ft
        </p>
        <p className="text-sm text-gray-400">
          Built-up area: {builtUpArea ? parseInt(builtUpArea).toLocaleString() : 0} sq ft
        </p>
      </div>
      <Button
        variant="primary"
        fullWidth
        className="mt-8"
      >
        Get Detailed Quote
      </Button>
      <p className="text-xs text-gray-400 mt-4">
        * This is an approximate estimation. Final costs may vary based on specific requirements and conditions.
      </p>
    </motion.div>
  );
};

export default CalculatorResult;
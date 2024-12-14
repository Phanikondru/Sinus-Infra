import React from 'react';
import { motion } from 'framer-motion';
import CalculatorInput from './CalculatorInput';
import CalculatorResult from './CalculatorResult';
import { useBudgetCalculator } from '../../hooks/useBudgetCalculator';

const BudgetForm = () => {
  const { formData, totalCost, handleChange } = useBudgetCalculator();

  return (
    <section className="pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-lg shadow-sm"
          >
            <h3 className="text-2xl font-bold mb-6">Project Details</h3>
            <div className="space-y-6">
              <CalculatorInput
                label="Plot Size (sq ft)"
                name="plotSize"
                value={formData.plotSize}
                onChange={handleChange}
                placeholder="Enter plot size"
              />
              <CalculatorInput
                label="Built-up Area (sq ft)"
                name="builtUpArea"
                value={formData.builtUpArea}
                onChange={handleChange}
                placeholder="Enter built-up area"
              />
            </div>
          </motion.div>

          <CalculatorResult
            totalCost={totalCost}
            baseRate={2222}
            builtUpArea={formData.builtUpArea}
          />
        </div>
      </div>
    </section>
  );
};

export default BudgetForm;
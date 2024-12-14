import React from 'react';
import BudgetHero from '../components/BudgetCalculator/BudgetHero';
import BudgetForm from '../components/BudgetCalculator/BudgetForm';
import BudgetFeatures from '../components/BudgetCalculator/BudgetFeatures';

const BudgetCalculator = () => {
  return (
    <main className="pt-16">
      <BudgetHero />
      <BudgetForm />
      <BudgetFeatures />
    </main>
  );
};

export default BudgetCalculator;
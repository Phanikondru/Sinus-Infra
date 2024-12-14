import React from 'react';
import PricingHero from '../components/Pricing/PricingHero';
import PricingCalculator from '../components/Pricing/PricingCalculator';
import PricingFeatures from '../components/Pricing/PricingFeatures';

const Pricing = () => {
  return (
    <main className="pt-16">
      <PricingHero />
      <PricingCalculator />
      <PricingFeatures />
    </main>
  );
};

export default Pricing;
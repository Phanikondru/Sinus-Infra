import React from 'react';
import PricingHero from '../components/Pricing/PricingHero';
import PricingCalculator from '../components/Pricing/PricingCalculator';
import PricingFeatures from '../components/Pricing/PricingFeatures';
import MaterialPrices from '../components/Pricing/MaterialPrices';

const Pricing = () => {
  return (
    <main className="pt-16">
      <PricingHero />
      <PricingCalculator />
      <PricingFeatures />
      <MaterialPrices />
    </main>
  );
};

export default Pricing;
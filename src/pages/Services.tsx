import React from 'react';
import ServicesHero from '../components/Services/ServicesHero';
import ServiceCategories from '../components/Services/ServiceCategories';
import ServiceFocus from '../components/Services/ServiceFocus';
import ServicePartner from '../components/Services/ServicePartner';

const Services = () => {
  return (
    <main className="pt-16">
      <ServicesHero />
      <ServiceCategories />
      <ServiceFocus />
      <ServicePartner />
    </main>
  );
};

export default Services;
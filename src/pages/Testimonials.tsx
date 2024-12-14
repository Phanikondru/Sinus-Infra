import React from 'react';
import TestimonialsHero from '../components/Testimonials/TestimonialsHero';
import TestimonialsList from '../components/Testimonials/TestimonialsList';

const Testimonials = () => {
  return (
    <main className="pt-16">
      <TestimonialsHero />
      <TestimonialsList />
    </main>
  );
};

export default Testimonials;
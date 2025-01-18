import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Features from '../components/Features';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials/Testimonials';
import FAQ from '../components/FAQ/FAQ';

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <Services />
      <Testimonials />
      <FAQ />
    </>
  );
};

export default Home;
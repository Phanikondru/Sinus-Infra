import React from 'react';
import AboutHero from '../components/About/AboutHero';
import StorySection from '../components/About/StorySection';
import AspireSection from '../components/About/AspireSection/AspireSection';
import ValuesSection from '../components/About/ValueSection/ValuesSection';

const About = () => {
  return (
    <main className="pt-16">
      <AboutHero />
      <StorySection />
      <ValuesSection />
      <AspireSection />
    </main>
  );
};

export default About;
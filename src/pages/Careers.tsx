import React from 'react';
import CareersHero from '../components/Careers/CareersHero';
import JoinTeam from '../components/Careers/JoinTeam';
import CareerPath from '../components/Careers/CareerPath';
import CareerForm from '../components/Careers/CareerForm';

const Careers = () => {
  return (
    <main className="pt-16">
      <CareersHero />
      <JoinTeam />
      <CareerPath />
      <CareerForm />
    </main>
  );
};

export default Careers;
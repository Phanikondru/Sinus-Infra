import React from 'react';
import QualityHero from '../components/QualityHSE/QualityHero';
import CertificationSection from '../components/QualityHSE/CertificationSection';
import HSEPractices from '../components/QualityHSE/HSEPractices';
import Sustainability from '../components/QualityHSE/Sustainability';

const QualityHSE = () => {
  return (
    <main className="pt-16">
      <QualityHero />
      <CertificationSection />
      <HSEPractices />
      <Sustainability />
    </main>
  );
};

export default QualityHSE;
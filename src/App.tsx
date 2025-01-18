import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Pricing from './pages/Pricing';
import Features from './pages/Features';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import QualityHSE from './pages/QualityHSE';
import Careers from './pages/Careers';
import BudgetCalculator from './pages/BudgetCalculator';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/features" element={<Features />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quality-hse" element={<QualityHSE />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/budget-calculator" element={<BudgetCalculator />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
};

export default App;
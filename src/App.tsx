import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Architecture from './pages/services/Architecture';
import Construction from './pages/services/Construction';
import Interior from './pages/services/Interior';
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
import ScrollToTopOnNavigate from './components/ScrollToTopOnNavigate';
import Footer from './components/Footer/Footer';
import FloatingButtons from './components/FloatingButtons';

function App() {
  return (
    <Router>
      <div className="min-h-screen pt-[40px]">
        <Navbar />
        <ScrollToTopOnNavigate />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/architecture" element={<Architecture />} />
          <Route path="/services/construction" element={<Construction />} />
          <Route path="/services/interior" element={<Interior />} />
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
        <FloatingButtons />
      </div>
    </Router>
  );
};

export default App;
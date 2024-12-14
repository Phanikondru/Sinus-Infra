import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from './common/Button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source 
            src="https://player.vimeo.com/external/477743905.sd.mp4?s=1ce6cd562c4cac7638a045d3f8f0d3e0d7f5bee0&profile_id=164&oauth2_token_id=57447761" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
        {/* Custom gradient overlay */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, #FFF 40.8%, rgba(255, 255, 255, 0.00) 79.67%)',
          mixBlendMode: 'multiply',
          opacity: 0.9
        }} />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center items-center px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-gray-800 mb-4"
        >
          One Nation, One Price, One Quality
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-6xl font-bold text-center text-gray-900 mb-8"
        >
          Redefining Excellence<br />
          Across <span className="text-[#DC9700]">India</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button 
            onClick={() => navigate('/services')}
            icon={<ArrowRight className="w-5 h-5" />}
            className="shadow-lg hover:shadow-xl"
          >
            Explore our services
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
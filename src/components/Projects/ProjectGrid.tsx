import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "Modern Office Complex",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
    location: "Bangalore, India",
    year: "2023"
  },
  {
    title: "Luxury Residential Tower",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80",
    location: "Mumbai, India",
    year: "2023"
  },
  {
    title: "Sustainable Shopping Mall",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80",
    location: "Delhi, India",
    year: "2022"
  },
  {
    title: "Tech Park",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1498354178607-a79df2916198?auto=format&fit=crop&q=80",
    location: "Hyderabad, India",
    year: "2022"
  },
  {
    title: "Eco-Friendly Apartments",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80",
    location: "Chennai, India",
    year: "2023"
  },
  {
    title: "Smart City Development",
    category: "Infrastructure",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
    location: "Pune, India",
    year: "2023"
  }
];

const ProjectGrid = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
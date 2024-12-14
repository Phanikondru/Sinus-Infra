import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';

interface ProjectCardProps {
  project: {
    title: string;
    category: string;
    image: string;
    location: string;
    year: string;
  };
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <span className="inline-block px-3 py-1 bg-[#FF8C00] rounded-full text-sm mb-3">
            {project.category}
          </span>
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <div className="flex items-center gap-4 text-sm text-gray-200">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{project.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{project.year}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
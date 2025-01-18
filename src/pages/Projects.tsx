import React from 'react';
import ProjectsHero from '../components/Projects/ProjectsHero';
import ProjectGrid from '../components/Projects/ProjectGrid';

const Projects = () => {
  return (
    <main className="pt-16">
      <ProjectsHero />
      <ProjectGrid />
    </main>
  );
};

export default Projects;
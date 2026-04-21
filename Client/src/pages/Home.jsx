import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projects';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      
      {/* Featured Projects Preview Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <p className="text-secondary font-bold uppercase tracking-widest text-xs mb-4">Projects</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-primary">Featured <span className="text-secondary">Work</span></h2>
            </div>
            <Link to="/projects" className="hidden md:flex items-center gap-2 text-secondary font-bold hover:gap-3 transition-all">
              View All Projects <ArrowRight size={20} />
            </Link>
          </div>

          <div className="space-y-8">
            {/* Show only the first 2 projects on the home page as a preview */}
            {projectsData.slice(0, 2).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link to="/projects" className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-3 rounded-xl font-bold">
              View All Projects <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <Experience />
      <Certifications />
      <Contact />
    </>
  );
};

export default Home;
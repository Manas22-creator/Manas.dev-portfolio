import React, { useState } from 'react';
import { projectsData } from '../data/projects';
import ProjectCard from '../components/ProjectCard'; // We use the same card logic

const ProjectPage = () => {
  const [filter, setFilter] = useState('All Projects');
  const categories = ['All Projects', 'Personal', 'Internship & College', 'Freelance'];

  const filteredProjects = filter === 'All Projects' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <p className="text-secondary font-bold uppercase tracking-widest text-xs mb-4">Projects</p>
          <h1 className="text-5xl font-extrabold text-primary mb-6">Project Portfolio</h1>
          <p className="text-text-gray max-w-3xl text-lg">
            A curated collection of projects demonstrating full-stack capabilities, 
            architectural thinking, and production deployment experience.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-all border 
                ${filter === cat 
                  ? 'bg-primary text-white border-primary' 
                  : 'bg-slate-50 text-slate-500 border-slate-100 hover:bg-white hover:border-slate-200'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8"> 
  {filteredProjects.map(project => (
    <ProjectCard key={project.id} project={project} />
  ))}
</div>
      </div>
    </div>
  );
};

export default ProjectPage;
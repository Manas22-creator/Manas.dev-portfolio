import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectCard = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden mb-8">
      <div className="p-8 md:p-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100">
               <ExternalLink size={20} className="text-secondary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary">{project.title}</h3>
              <span className="inline-block bg-slate-100 text-slate-500 px-3 py-1 rounded-lg text-xs font-bold mt-1 uppercase tracking-wider">
                {project.category}
              </span>
            </div>
          </div>
        </div>

        <p className="text-text-gray leading-relaxed mb-6 max-w-3xl">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t, i) => (
            <span key={i} className="bg-blue-50 text-secondary px-3 py-1 rounded-lg text-xs font-bold border border-blue-100 italic">
              {t}
            </span>
          ))}
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 text-text-gray hover:text-primary font-bold text-sm transition-all"
        >
          {isOpen ? (
            <>View Less <ChevronUp size={18} /></>
          ) : (
            <>View Details <ChevronDown size={18} /></>
          )}
        </button>

        {/* Expandable Section */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-8 mt-8 border-t border-slate-50 grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Objectives */}
                <div>
                  <h4 className="font-bold text-primary mb-4 text-sm uppercase tracking-widest">Objectives</h4>
                  <ul className="space-y-3">
                    {project.objectives.map((obj, i) => (
                      <li key={i} className="text-text-gray text-sm flex gap-3">
                        <span className="text-secondary font-bold">•</span> {obj}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="font-bold text-primary mb-4 text-sm uppercase tracking-widest">Key Features</h4>
                  <ul className="space-y-3">
                    {project.keyFeatures.map((feat, i) => (
                      <li key={i} className="text-text-gray text-sm flex gap-3">
                        <span className="text-secondary font-bold">•</span> {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* My Responsibilities */}
                <div className="md:col-span-2">
                   <h4 className="font-bold text-primary mb-4 text-sm uppercase tracking-widest">My Responsibilities</h4>
                   <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.responsibilities.map((res, i) => (
                      <li key={i} className="text-text-gray text-sm flex gap-3">
                         <span className="text-secondary font-bold">•</span> {res}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deployment */}
                <div className="bg-slate-50 p-6 rounded-2xl">
                  <h4 className="font-bold text-primary mb-2 text-sm uppercase tracking-widest">Deployment Strategy</h4>
                  <p className="text-text-gray text-sm">{project.deployment}</p>
                </div>

                {/* Impact */}
                <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-secondary">
                  <h4 className="font-bold text-primary mb-2 text-sm uppercase tracking-widest">Impact / Outcome</h4>
                  <p className="text-text-gray text-sm font-medium">{project.impact}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProjectCard;
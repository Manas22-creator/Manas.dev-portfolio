import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Pratibha Infotech",
      role: "Full Stack Intern",
      points: [
        "Built real-world web applications",
        "Implemented REST APIs",
        "Followed Git workflows",
        "Worked on deployment pipelines"
      ]
    },
    {
      company: "Vault of Code",
      role: "Web Dev Intern",
      points: [
        "Built frontend projects",
        "Collaborated in development workflows"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-bg-slate">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-secondary font-bold uppercase tracking-widest text-xs mb-4">Experience</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary">
            Professional <span className="text-secondary">Journey</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center border border-blue-100 text-secondary">
                  <Briefcase size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary">{exp.company}</h3>
                  <p className="text-secondary text-sm font-semibold">{exp.role}</p>
                </div>
              </div>
              <ul className="space-y-3">
                {exp.points.map((point, j) => (
                  <li key={j} className="text-text-gray text-sm flex gap-3">
                    <span className="text-secondary">•</span> {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
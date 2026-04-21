import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "React.js", "Vite"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js"]
    },
    {
      title: "Database",
      skills: ["MongoDB", "MySQL"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "Postman", "Netlify", "Vercel", "Render"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-bg-slate">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-secondary font-bold uppercase tracking-widest text-xs mb-4 text-center">Skills</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary text-center">
            Technical <span className="text-secondary">Expertise</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-xl font-bold mb-6 text-primary border-b border-slate-50 pb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, j) => (
                  <span key={j} className="bg-slate-50 text-slate-600 px-4 py-2 rounded-xl text-sm font-medium border border-slate-100 hover:border-secondary hover:text-secondary transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
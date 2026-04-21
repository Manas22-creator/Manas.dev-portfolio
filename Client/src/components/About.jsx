import React from 'react';
import { Code, Server, Layout, Database, Terminal } from 'lucide-react';

const About = () => {
  const services = [
    { title: 'Full-Stack Development', desc: 'End-to-end web app development with MERN stack.', icon: <Code className="text-secondary" /> },
    { title: 'REST API Development', desc: 'Scalable backend services and API design.', icon: <Server className="text-secondary" /> },
    { title: 'UI/UX Optimization', desc: 'Clean, intuitive interfaces with modern design.', icon: <Layout className="text-secondary" /> },
    { title: 'Deployment & DevOps', desc: 'CI/CD pipelines, hosting, and monitoring.', icon: <Terminal className="text-secondary" /> },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <p className="text-secondary font-bold uppercase tracking-widest text-xs mb-4">About Me</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
            Crafting digital experiences with <span className="text-secondary">clean code</span>
          </h2>
          <p className="text-text-gray text-lg leading-relaxed">
            I'm Manas Pandey, a MERN Stack Developer. I specialize in building scalable, 
            user-focused web applications, combining a clean architecture mindset with strong UX/UI sensibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div key={i} className="p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all group">
              <div className="mb-4 bg-white w-12 h-12 flex items-center justify-center rounded-xl shadow-sm group-hover:shadow-md transition-all">
                {s.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-text-gray text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
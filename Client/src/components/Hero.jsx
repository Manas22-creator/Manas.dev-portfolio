import React from 'react';
import { Mail, FileText, ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 lg:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
      {/* Left Content */}
      <div className="lg:w-3/5 text-left">
        <p className="text-secondary font-bold tracking-widest uppercase text-xs mb-4">
          Full-Stack MERN Developer
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold text-primary leading-[1.1] mb-8">
          Building <span className="text-secondary">Scalable</span> <br />
          Web Applications
        </h1>
        <p className="text-text-gray text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          I build responsive, user-focused, and performance-optimized web applications 
          using React, Node.js, Express, and MongoDB.
        </p>
        
        <div className="flex flex-wrap items-center gap-5">
          {/* Main Blue Button */}
          <button 
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            className="bg-secondary text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
          >
            View Projects <ExternalLink size={20} />
          </button>
          
          {/* Outlined Contact Button */}
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-white border border-slate-200 text-primary px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-300 transition-all shadow-sm"
          >
            Contact Me <Mail size={20} />
          </button>

          {/* Simple Resume Link */}
          <button 
            onClick={() => window.open('https://drive.google.com/file/d/1PEofoxvpngaFrk1WQbZfsxnCoHasfSp-/view?usp=sharing', '_blank')}
            className="bg-white border border-slate-200 text-primary px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-300 transition-all shadow-sm"
          >
            <FileText size={20} /> View Resume
          </button>
        </div>
      </div>

      {/* Right Content - The Floating Code Card */}
      <div className="lg:w-2/5 flex justify-center lg:justify-end">
        <div className="w-full max-w-sm bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_32px_64px_-15px_rgba(0,0,0,0.1)] relative">
           <div className="flex gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
          </div>
          <pre className="text-[15px] font-mono text-slate-600 leading-relaxed">
            <code>
              <span className="text-purple-500">const</span> developer = {'{'}<br />
              &nbsp;&nbsp;name: <span className="text-emerald-500">'Manas Pandey'</span>,<br />
              &nbsp;&nbsp;role: <span className="text-emerald-500">'Full-Stack Dev'</span>,<br />
              &nbsp;&nbsp;stack: [<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-secondary">'React'</span>, <span className="text-secondary">'Node.js'</span>,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-secondary">'Express'</span>, <span className="text-secondary">'MongoDB'</span><br />
              &nbsp;&nbsp;],<br />
              &nbsp;&nbsp;passionate: <span className="text-blue-500">true</span>,<br />
              {'}'};
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
};

export default Hero;
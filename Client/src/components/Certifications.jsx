import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Responsive Web Design - FreeCodeCamp",
      icon: <Award className="text-secondary" size={20} />
    },
    {
      title: "Full Stack Internship - Pratinik Infotech",
      icon: <ShieldCheck className="text-secondary" size={20} />
    },
    {
      title: "Vault of Code Internship",
      icon: <ShieldCheck className="text-secondary" size={20} />
    },
    {
      title: "German A1 Certificate",
      icon: <Award className="text-secondary" size={20} />
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-secondary font-bold uppercase tracking-widest text-[10px] mb-3">Certifications</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary">
            Credentials & <span className="text-secondary">Awards</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert, i) => (
            <div 
              key={i} 
              className="flex items-center gap-4 p-5 rounded-2xl border border-slate-100 bg-slate-50/30 hover:bg-white hover:shadow-xl hover:shadow-blue-50 transition-all duration-300 group cursor-default"
            >
              <div className="shrink-0 w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                {cert.icon}
              </div>
              <h3 className="text-sm font-bold text-slate-700 leading-tight">
                {cert.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
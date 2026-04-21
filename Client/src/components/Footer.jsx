import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 text-sm font-medium">
          © 2026 Manas Pandey. Built with React & Tailwind CSS.
        </p>
        <div className="text-slate-400 text-xs md:text-sm font-medium flex gap-2">
          <span>Full-Stack MERN Developer</span>
          <span className="text-slate-200">|</span>
          <span>Maharashtra, India</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
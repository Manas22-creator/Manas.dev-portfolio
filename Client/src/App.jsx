import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Components & Pages
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage';

function App() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // 1. If there is a hash (e.g., #about) in the URL
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      
      if (element) {
        // Small timeout ensures the DOM is rendered before scrolling
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      // 2. If no hash (standard page change), scroll to the very top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]); // This runs every time the URL or Hash changes

  return (
    <div className="min-h-screen bg-bg-slate antialiased">
      <Navbar />
      
      <main>
        <Routes>
          {/* Landing Page (Shows only 2 project previews) */}
          <Route path="/" element={<Home />} />

          {/* Dedicated Projects Page (Shows all projects in 2-column grid) */}
          <Route path="/projects" element={<ProjectPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Home } from './views/Home';
import { ProjectDetail } from './views/ProjectDetail';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <div className="min-h-screen bg-surface selection:bg-accent-2 selection:text-white">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </main>
      <footer className="bg-[#050505] text-white/20 py-8 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between font-mono text-[12px] border-t border-white/5">
        <div>© 2026 ∙ DISEÑADO Y DESARROLLADO POR DEV.PORTFOLIO</div>
        <div className="mt-4 md:mt-0 flex gap-6 uppercase tracking-widest">
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default App;

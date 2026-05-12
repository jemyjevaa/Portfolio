import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section id="about" className="bg-surface py-24 px-6 md:px-12 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-20 items-start">
          <div className="aspect-[3/4] bg-surface-alt rounded-lg overflow-hidden relative group border border-ink-faint">
            <div className="w-full h-full flex items-center justify-center font-sans text-8xl text-ink-faint bg-surface-alt transition-transform duration-700 group-hover:scale-110">
              ✦
            </div>
            <div className="absolute bottom-6 left-6 bg-surface px-4 py-2 rounded-sm text-[12px] font-semibold tracking-wider text-ink shadow-sm border border-ink-faint">
              Desarrolladora · Diseñadora
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent-2 mb-2">
              // Sobre mí
            </div>
            <div className="w-10 h-[2px] bg-accent-2 mb-8" />
            
            <h3 className="font-sans font-black text-[2rem] leading-tight text-ink mb-6">
              Construyo software que se siente bien en cualquier pantalla.
            </h3>
            
            <p className="text-ink-muted font-body text-[1.1rem] leading-relaxed mb-6">
              Creo que el buen código es aquel que no se nota. Me gusta involucrarme en el proceso desde que una idea es solo un boceto en un lienzo, cuidando que esa chispa no se pierda al transformarse en lógica.
            </p>
            
            <p className="text-ink-muted font-body text-[1.1rem] leading-relaxed mb-8">
              Para mí, programar es encontrar el equilibrio entre la libertad del diseño y la estructura del desarrollo.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
              <div className="p-6 bg-surface-alt rounded-xl border border-ink-faint">
                <div className="text-[11px] font-bold tracking-widest uppercase text-accent-2 mb-4">Web</div>
                {['React 18+', 'Tailwind CSS', 'TypeScript', 'Next.js'].map(skill => (
                  <div key={skill} className="flex items-center gap-3 text-[13px] font-mono text-ink py-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-2 shadow-[0_0_8px_rgba(var(--accent2-rgb),0.4)]" />
                    {skill}
                  </div>
                ))}
              </div>
              
              <div className="p-6 bg-surface-alt rounded-xl border border-ink-faint">
                <div className="text-[11px] font-bold tracking-widest uppercase text-accent-2 mb-4">Mobile</div>
                {['Flutter', 'Dart', 'Swift', 'SwiftUI'].map(skill => (
                  <div key={skill} className="flex items-center gap-3 text-[13px] font-mono text-ink py-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-2 shadow-[0_0_8px_rgba(var(--accent2-rgb),0.4)]" />
                    {skill}
                  </div>
                ))}
              </div>
              
              <div className="p-6 bg-surface-alt rounded-xl border border-ink-faint">
                <div className="text-[11px] font-bold tracking-widest uppercase text-accent-2 mb-4">Tools</div>
                {['Node.js', 'Firebase', 'Git/GitHub', 'Figma'].map(skill => (
                  <div key={skill} className="flex items-center gap-3 text-[13px] font-mono text-ink py-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-2 shadow-[0_0_8px_rgba(var(--accent2-rgb),0.4)]" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

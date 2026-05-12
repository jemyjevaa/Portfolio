import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../../data/projects';

interface CaseStudyProps {
  project: Project;
}

export const CaseStudy: React.FC<CaseStudyProps> = ({ project }) => {
  return (
    <section id="casestudy" className="bg-surface py-24 px-6 md:px-12 scroll-mt-24">
      <div className="max-w-[1200px] mx-auto">
        <div className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent-2 mb-2 reveal visible">
          // Case study
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-sans text-[clamp(2rem,3.5vw,3.2rem)] leading-tight text-ink mb-4">
              {project.title.split(' — ')[0]}:<br />
              <span className="text-ink-muted text-[0.6em] font-sans font-normal uppercase tracking-[0.2em]">
                {project.type === 'cross' ? 'Cero compromiso en 3 plataformas' : project.type === 'web' ? 'Performance Web Extrema' : 'Experiencia Móvil Nativa'}
              </span>
            </h2>
            <div className="w-10 h-[2px] bg-accent-2 mb-12" />
            
            <div className="grid md:grid-cols-[1.2fr_1fr] gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-card rounded-[24px] border border-ink-faint overflow-hidden shadow-lg"
              >
                <div className="bg-ink px-6 py-4 flex items-center justify-between">
                  <div className="font-mono text-[13px] text-surface tracking-wider">∙ {project.id}.detail</div>
                  <div className="flex gap-1.5">
                    {[1, 2, 3].map(i => <div key={i} className="w-2 h-2 rounded-full bg-white/25" />)}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="rounded-xl p-6 text-white mb-4" style={{ background: project.color }}>
                    <div className="text-[10px] uppercase tracking-widest opacity-50">Impacto del proyecto</div>
                    <div className="text-[28px] font-bold my-1">{project.metrics[0].val}</div>
                    <div className="text-[12px] opacity-60">{project.metrics[0].label} acumuladas</div>
                    <div className="flex gap-2 mt-4">
                      <div className="flex-1 h-9 bg-white/12 rounded-md flex items-center justify-center text-[11px]">Ver demo</div>
                      <div className="flex-1 h-9 bg-white/6 rounded-md" />
                      <div className="flex-1 h-9 bg-white/6 rounded-md" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {project.metrics.map(kpi => (
                      <div key={kpi.label} className="bg-surface rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-ink">{kpi.val}</div>
                        <div className="text-[10px] text-ink-muted mt-0.5">{kpi.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <ul className="list-none m-0">
                    {project.details.stats.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 py-3 border-b border-surface-alt last:border-0">
                        <div className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold" style={{ background: item.color, color: item.text }}>
                          {item.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="flex-1">
                          <div className="text-[12px] font-semibold text-ink">{item.name}</div>
                          <div className="text-[10px] text-ink-muted">{item.sub}</div>
                        </div>
                        <div className="font-mono text-[12px] font-medium" style={{ color: item.amt }}>{item.val}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
              
              <div className="flex flex-col gap-8">
                <div className="p-6 bg-card border border-surface-alt rounded-lg">
                  <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-accent-2 mb-3">→ El desafío</div>
                  <p className="text-[14px] text-ink-muted leading-relaxed">
                    {project.details.challenge}
                  </p>
                </div>
                
                <div className="p-6 bg-card border border-surface-alt rounded-lg">
                  <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-accent-3 mb-3">✓ La solución</div>
                  <p className="text-[14px] text-ink-muted leading-relaxed mb-4">
                    {project.details.solution}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.details.kpis.map(chip => (
                      <span key={chip} className="text-[12px] font-semibold px-3.5 py-1.5 rounded-full bg-accent-3/10 text-accent-3">
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="p-6 bg-card border border-accent-4/20 rounded-lg">
                  <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-accent-4 mb-3">◈ Stack</div>
                  <p className="text-[14px] text-ink-muted leading-relaxed">
                    {project.details.stack}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Smartphone, Layers, Globe, Zap } from 'lucide-react';
import { projects, Project } from '../../data/projects';

const ProjectCard: React.FC<Project> = (p) => {
  const { id, title, desc, tags, metrics, tech, featured, color, type } = p;
  const Icon = type === 'web' ? Globe : type === 'mobile' ? Smartphone : Layers;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`bg-card rounded-lg overflow-hidden border border-ink-faint transition-shadow duration-300 hover:shadow-lg group cursor-pointer ${featured ? 'md:col-span-2' : ''}`}
    >
      <Link to={`/project/${id}`}>
        <div className={`h-[280px] ${featured ? 'md:h-[500px]' : ''} relative overflow-hidden flex items-center justify-center bg-surface-alt`} style={{ background: color }}>
          {p.mainImage ? (
            type === 'mobile' ? (
              /* High-End Studio Phone Mockup */
              <div className="relative w-full h-full flex items-end justify-center px-6">
                {/* Studio Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8),transparent_70%)] opacity-50" />
                
                <div className="h-[125%] aspect-[9/19.5] bg-white rounded-[1.8rem] p-[4px] shadow-[0_30px_70px_rgba(0,0,0,0.18),0_10px_20px_rgba(0,0,0,0.08)] relative transform translate-y-12 group-hover:translate-y-6 transition-all duration-700 ease-ease border border-ink-faint">
                  <div className="w-full h-full bg-surface-alt rounded-[1.5rem] overflow-hidden relative border border-ink-faint/30">
                    {/* Glass Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent z-10 pointer-events-none" />
                    <img src={p.mainImage} alt={title} className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            ) : (
              /* High-End Studio Browser Mockup */
              <div className="relative w-full h-full flex items-end justify-center pt-12 px-6">
                {/* Studio Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8),transparent_70%)] opacity-50" />

                <div className="w-full h-[115%] bg-white rounded-t-2xl shadow-[0_30px_70px_rgba(0,0,0,0.15),0_10px_20px_rgba(0,0,0,0.05)] relative transform translate-y-12 group-hover:translate-y-6 transition-all duration-700 ease-ease border border-ink-faint flex flex-col overflow-hidden">
                  <div className="h-8 bg-surface border-b border-ink-faint flex items-center gap-2 px-4 shrink-0">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/20 border border-[#ff5f56]/30" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/20 border border-[#ffbd2e]/30" />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/20 border border-[#27c93f]/30" />
                      </div>
                      <div className="h-4 w-32 bg-ink/5 rounded-full mx-auto" />
                  </div>
                  <div className="flex-1 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent z-10 pointer-events-none" />
                    <img src={p.mainImage} alt={title} className="w-full h-full object-cover object-top" />
                  </div>
                </div>
              </div>
            )
          ) : (
            /* Mock content for visual interest based on type */
            <div className="relative w-full h-full flex items-center justify-center p-8">
              {type === 'web' && (
                <div className="w-full max-w-[320px] aspect-video bg-white/10 rounded-t-lg border border-white/20 backdrop-blur-md shadow-2xl flex flex-col overflow-hidden transform translate-y-4 group-hover:translate-y-2 transition-transform duration-500">
                  <div className="h-4 bg-white/10 border-bottom border-white/10 flex items-center gap-1 px-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  </div>
                  <div className="flex-1 p-3 flex flex-col gap-2">
                    <div className="h-3 w-1/2 bg-white/20 rounded" />
                    <div className="h-2 w-full bg-white/10 rounded" />
                    <div className="h-2 w-3/4 bg-white/10 rounded" />
                  </div>
                </div>
              )}
              {type === 'mobile' && (
                <div className="w-[140px] aspect-[9/19] bg-white/10 rounded-[2rem] border-[3px] border-white/20 backdrop-blur-md shadow-2xl flex flex-col overflow-hidden transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="h-6 w-1/3 bg-white/20 rounded-full mx-auto mt-2" />
                  <div className="flex-1 p-4 flex flex-col gap-3 mt-4">
                    <div className="h-12 w-full bg-white/20 rounded-xl" />
                    <div className="h-4 w-2/3 bg-white/10 rounded" />
                    <div className="h-4 w-full bg-white/10 rounded" />
                  </div>
                </div>
              )}
              {type === 'cross' && (
                <div className="relative w-full flex items-center justify-center">
                  <div className="w-[180px] aspect-video bg-white/10 rounded-lg border border-white/20 backdrop-blur-md shadow-xl -translate-x-4 -translate-y-2" />
                  <div className="absolute w-[80px] aspect-[9/19] bg-white/20 rounded-2xl border-2 border-white/30 backdrop-blur-lg shadow-2xl translate-x-12 translate-y-4" />
                </div>
              )}
            </div>
          )}
          
          {/* Floating Icon */}
          <div className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Icon size={16} />
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex gap-1.5 flex-wrap">
              {tags.slice(0, 3).map(tag => (
                <span key={tag} className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-surface-alt text-ink-muted uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
            <span className="font-mono text-[9px] text-ink-faint uppercase tracking-tighter flex items-center gap-1">
              <Zap size={10} className="text-accent-2" /> {type}
            </span>
          </div>
          
          <h3 className="font-sans font-bold text-[1.3rem] text-ink mb-2 group-hover:text-accent-2 transition-colors">{title}</h3>
          <p className="text-[14px] text-ink-muted leading-relaxed mb-4 line-clamp-2">{desc}</p>
          
          <div className="flex gap-5 mb-4 p-3 bg-surface rounded flex-wrap">
            {metrics.map(m => (
              <div key={m.label} className="flex flex-col">
                <span className="font-mono text-[15px] font-medium text-ink">{m.val}</span>
                <span className="text-[10px] text-ink-muted uppercase tracking-widest">{m.label}</span>
              </div>
            ))}
          </div>
          
          <div className="flex items-center justify-between pt-4 border-t border-surface-alt">
            <span className="font-mono text-[11px] text-ink-faint">{tech}</span>
            <div className="text-[13px] font-semibold text-ink flex items-center gap-1 transition-all hover:gap-2 group-hover:text-accent-2">
              Ver proyecto <ArrowRightIcon className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'web' | 'mobile'>('all');

  const filteredProjects = projects.filter(p => 
    filter === 'all' || p.type === filter || (p.type === 'cross' && (filter === 'web' || filter === 'mobile'))
  );

  const filterOptions: { label: string, val: 'all' | 'web' | 'mobile' }[] = [
    { label: 'Todos', val: 'all' },
    { label: 'Web', val: 'web' },
    { label: 'Mobile', val: 'mobile' },
  ];

  return (
    <section id="projects" className="bg-surface py-24 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent-2 mb-2 reveal visible">
          // Proyectos
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <h2 className="font-sans font-black text-[clamp(2rem,3.5vw,3.2rem)] leading-tight text-ink mb-4 reveal visible">
              Proyectos <span className="text-accent-2 italic">Destacados</span>
            </h2>
            <p className="text-[1.05rem] text-ink-muted max-w-[560px] leading-relaxed reveal visible">
              Proyectos con métricas reales donde la coherencia cross-platform fue el requisito central.
            </p>
          </div>

          <div className="flex bg-surface-alt p-1 rounded-lg border border-ink-faint w-fit h-fit reveal visible">
            {filterOptions.map((opt) => (
              <button
                key={opt.val}
                onClick={() => setFilter(opt.val)}
                className={`px-6 py-1.5 text-[12px] font-bold uppercase tracking-wider rounded-md transition-all ${
                  filter === opt.val 
                    ? 'bg-ink text-surface shadow-sm' 
                    : 'text-ink-muted hover:text-ink'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
        
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p) => (
              <ProjectCard key={p.id} {...p} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};




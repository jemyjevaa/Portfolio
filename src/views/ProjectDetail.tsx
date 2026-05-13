import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Zap, Globe, Smartphone, Layers, X } from 'lucide-react';
import { projects } from '../data/projects';

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-surface p-6">
        <h1 className="font-sans text-3xl mb-4">Proyecto no encontrado</h1>
        <Link to="/" className="text-accent-2 font-bold flex items-center gap-2">
          <ArrowLeft size={18} /> Volver al inicio
        </Link>
      </div>
    );
  }

  const Icon = project.type === 'web' ? Globe : project.type === 'mobile' ? Smartphone : Layers;

  return (
    <div className="min-h-screen bg-surface">
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[1000] bg-black/95 flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <motion.button
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </motion.button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Fullscreen view"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Detail Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-surface/80 backdrop-blur-md border-b border-ink-faint flex items-center justify-between px-6 md:px-12">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-wider text-ink-muted hover:text-ink transition-colors"
        >
          <ArrowLeft size={16} /> Volver
        </button>
        <div className="font-mono text-[11px] tracking-widest text-ink">
          PROYECTO ∙ {project.id.toUpperCase()}
        </div>
        <div className="w-10" /> {/* Spacer */}
      </nav>

      <main className="pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-[1fr_0.8fr] gap-16 items-start">
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="p-2 bg-accent-2/10 text-accent-2 rounded-lg">
                  <Icon size={20} />
                </span>
                <span className="font-mono text-[12px] uppercase tracking-widest text-accent-2">
                  {project.type} Solution
                </span>
              </div>
              
              <h1 className="font-sans font-black text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] text-ink mb-8 tracking-tighter">
                {project.title}
              </h1>
              
              <p className="text-[1.2rem] text-ink-muted leading-relaxed mb-12 max-w-[600px]">
                {project.desc}
              </p>

              <div
                className="w-full aspect-video rounded-[32px] mb-16 overflow-hidden relative flex items-center justify-center p-4 md:p-8 cursor-zoom-in"
                style={{ background: project.color }}
                onClick={() => project.mainImage && setSelectedImage(project.mainImage)}
              >
                {project.mainImage ? (
                  project.type === 'mobile' ? (
                    /* Triple Phone Premium Layout - Vertical & Clean */
                    <div className="relative w-full h-full flex items-center justify-center">
                      {/* Back Phones */}
                      {project.gallery && project.gallery.length > 1 && (
                        <>
                          <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 0.3, x: -160 }}
                            className="absolute h-[85%] aspect-[9/19.5] bg-white rounded-[1.25rem] shadow-lg overflow-hidden border border-ink-faint blur-[1px] hidden md:block"
                          >
                            <img src={project.gallery[1]} alt="" className="w-full h-full object-cover" />
                          </motion.div>
                          <motion.div 
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 0.3, x: 160 }}
                            className="absolute h-[85%] aspect-[9/19.5] bg-white rounded-[1.25rem] shadow-lg overflow-hidden border border-ink-faint blur-[1px] hidden md:block"
                          >
                            <img src={project.gallery[2] || project.gallery[1]} alt="" className="w-full h-full object-cover" />
                          </motion.div>
                        </>
                      )}
                      
                      {/* Main Phone */}
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1.05, y: 0 }}
                        className="h-full aspect-[9/19.5] bg-white rounded-[1.5rem] p-[3px] shadow-[0_50px_120px_-20px_rgba(0,0,0,0.35)] relative border border-ink-faint z-10"
                      >
                          <div className="w-full h-full rounded-[1.3rem] overflow-hidden relative border border-ink-faint/10">
                            <img 
                              src={project.mainImage} 
                              alt={project.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                      </motion.div>
                    </div>
                  ) : (
                    /* Browser Mockup */
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="w-full h-full rounded-xl overflow-hidden border border-white/20 shadow-2xl bg-white flex flex-col"
                    >
                       <div className="h-10 bg-surface border-b border-ink-faint flex items-center gap-2 px-4 shrink-0">
                          <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-400/20" />
                            <div className="w-3 h-3 rounded-full bg-yellow-400/20" />
                            <div className="w-3 h-3 rounded-full bg-green-400/20" />
                          </div>
                          <div className="mx-auto w-1/3 h-5 bg-surface-alt rounded-md border border-ink-faint" />
                       </div>
                       <img 
                         src={project.mainImage} 
                         alt={project.title}
                         className="w-full h-full object-cover object-top"
                       />
                    </motion.div>
                  )
                ) : (
                  <div className="w-full h-full bg-white/10 rounded-2xl border border-white/20 backdrop-blur-xl shadow-2xl flex flex-col">
                     <div className="h-8 bg-black/20 flex items-center gap-2 px-4">
                        <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                        <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                        <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                     </div>
                     <div className="flex-1 p-8">
                        <div className="w-1/3 h-6 bg-white/20 rounded-md mb-6" />
                        <div className="w-full h-4 bg-white/10 rounded-md mb-3" />
                        <div className="w-5/6 h-4 bg-white/10 rounded-md mb-3" />
                        <div className="w-4/6 h-4 bg-white/10 rounded-md mb-8" />
                        <div className="flex gap-4">
                          <div className="w-32 h-10 bg-white/20 rounded-lg" />
                          <div className="w-32 h-10 bg-white/10 rounded-lg" />
                        </div>
                     </div>
                  </div>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div>
                  <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent-2 mb-4">// El Desafío</h3>
                  <p className="text-ink-muted leading-relaxed whitespace-pre-line">{project.details.challenge}</p>
                </div>
                <div>
                  <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent-3 mb-4">// La Solución</h3>
                  <p className="text-ink-muted leading-relaxed whitespace-pre-line">{project.details.solution}</p>
                </div>
              </div>

              {/* Gallery Section */}
              {project.gallery && project.gallery.length > 0 && (
                <div className="mb-16">
                  <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink-muted mb-8">// Galería del proyecto</h3>
                  <div className={`grid gap-6 ${project.type === 'mobile' ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-1 md:grid-cols-2'}`}>
                    {project.gallery.map((img, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`${project.type === 'mobile' ? 'aspect-[9/16]' : 'aspect-video'} rounded-2xl overflow-hidden border border-ink-faint bg-surface-alt group cursor-zoom-in`}
                        onClick={() => setSelectedImage(img)}
                      >
                        <img 
                          src={img} 
                          alt={`${project.title} gallery ${index + 1}`} 
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:sticky lg:top-32 space-y-8"
            >
              {project.type !== 'web' && (
                <div className="p-8 bg-card border border-ink-faint rounded-2xl">
                  <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink-muted mb-6">Métricas de impacto</h3>
                  <div className="space-y-6">
                    {project.metrics.map(m => (
                      <div key={m.label} className="flex justify-between items-end border-b border-surface-alt pb-4">
                        <span className="text-[14px] text-ink-muted">{m.label}</span>
                        <span className="font-sans text-2xl text-ink">{m.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="p-8 bg-card border border-ink-faint rounded-2xl">
                <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-ink-muted mb-6">Tecnologías</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 bg-surface text-ink text-[12px] font-bold rounded-full border border-surface-alt">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>


            </motion.aside>

          </div>
        </div>
      </main>

      <footer className="py-24 border-t border-ink-faint bg-surface-alt flex flex-col items-center">
         <p className="font-mono text-[11px] uppercase tracking-widest text-ink-muted mb-4">Siguiente Proyecto</p>
         <Link 
            to={`/project/${projects[(projects.indexOf(project) + 1) % projects.length].id}`}
            className="font-sans text-[clamp(2rem,4vw,3.5rem)] hover:text-accent-2 transition-colors flex items-center gap-4 group"
         >
           {projects[(projects.indexOf(project) + 1) % projects.length].title.split(' — ')[0]}
           <ArrowRight className="w-12 h-12 transform group-hover:translate-x-2 transition-transform" />
         </Link>
      </footer>
    </div>
  );
};

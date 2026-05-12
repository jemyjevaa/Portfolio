import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    metric: '−60% QA visual',
    quote: 'Redujo nuestro tiempo de QA visual en 60% con un design system que hoy usamos en tres plataformas. No solo entregó el código: nos dejó documentación que el equipo mantiene solo.',
    name: 'Carlos Rodríguez',
    role: 'CTO · Atlas Finance',
    avatar: 'CR',
    color: '#f0a882',
    bg: 'rgba(200,87,42,0.25)',
    featured: true
  },
  {
    metric: '4.9★ entregada',
    quote: 'Llegó cuando ya teníamos iOS en producción y necesitábamos paridad en Flutter. En 6 semanas el componente era idéntico al nativo. El equipo de diseño no encontró diferencias.',
    name: 'María Velázquez',
    role: 'Product Manager · FitTrack',
    avatar: 'MV',
    color: '#0369a1',
    bg: '#e8f5fe'
  },
  {
    metric: '$2.4M GMV',
    quote: 'Lanzamos el marketplace en iOS, Android y web el mismo día. Algo que creíamos imposible sin tres equipos. El checkout nativo en cada plataforma funcionó desde el día uno.',
    name: 'Jorge Alvarado',
    role: 'CEO · Marketplace Co.',
    avatar: 'JA',
    color: '#b45309',
    bg: '#fef3e2'
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="bg-card py-24 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent-2 mb-2 reveal visible">
          // Testimonios
        </div>
        <h2 className="font-sans font-black text-[clamp(2rem,3.5vw,3.2rem)] leading-tight text-ink mb-4 reveal visible">
          Lo que dicen quienes<br />trabajaron conmigo.
        </h2>
        <p className="text-[1.05rem] text-ink-muted max-w-[560px] leading-relaxed mb-12 reveal visible">
          Resultados concretos, no solo buenas palabras.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-lg border border-ink-faint transition-all duration-300 hover:border-ink-muted hover:-translate-y-1 hover:shadow-lg relative ${
                t.featured ? 'bg-ink border-ink' : 'bg-surface'
              }`}
            >
              <div className={`absolute top-5 right-5 font-mono text-[11px] font-bold px-2.5 py-1 rounded-full ${
                t.featured ? 'bg-accent-2/25 text-[#f0a882]' : 'bg-accent-2/10 text-accent-2'
              }`}>
                {t.metric}
              </div>
              
              <div className="text-4xl font-sans text-accent-2 mb-2">"</div>
              <p className={`font-sans text-[1rem] leading-relaxed mb-6 ${
                t.featured ? 'text-surface' : 'text-ink'
              }`}>
                {t.quote}
              </p>
              
              <div className={`flex items-center gap-3 pt-4 border-t ${
                t.featured ? 'border-white/10' : 'border-ink-faint'
              }`}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-[13px] shrink-0" style={{ background: t.bg, color: t.color }}>
                  {t.avatar}
                </div>
                <div>
                  <div className={`text-[13px] font-bold ${t.featured ? 'text-surface' : 'text-ink'}`}>{t.name}</div>
                  <div className={`text-[11px] font-mono ${t.featured ? 'text-white/50' : 'text-ink-muted'}`}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

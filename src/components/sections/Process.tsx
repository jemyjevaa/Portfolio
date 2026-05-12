import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: 'Discovery', desc: 'Entender el problema, el usuario y las constraints técnicas antes de escribir una línea.' },
  { num: '02', title: 'Arquitectura', desc: 'Diseñar el sistema, componentes compartidos y estructura de datos.' },
  { num: '03', title: 'Design tokens', desc: 'Crear la fuente de verdad visual que luego se exporta a cada plataforma.' },
  { num: '04', title: 'Implementación', desc: 'Desarrollo iterativo con revisiones de diseño y rendimiento en cada sprint.' },
  { num: '05', title: 'Entrega', desc: 'Documentación, handoff y soporte post-lanzamiento.' },
];

export const Process: React.FC = () => {
  return (
    <section id="process" className="bg-card py-24 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent-2 mb-2 reveal visible">
          // Proceso
        </div>
        <h2 className="font-sans text-[clamp(2rem,3.5vw,3.2rem)] leading-tight text-ink mb-12 reveal visible">
          Cómo trabajo
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-0 relative">
          {/* Timeline connector line */}
          <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-ink-faint z-0" />
          
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center px-2 relative z-10 group"
            >
              <div className="w-14 h-14 rounded-full bg-surface border-2 border-ink-faint flex items-center justify-center font-mono text-[13px] font-medium mx-auto mb-4 transition-all duration-300 group-hover:bg-ink group-hover:text-surface group-hover:border-ink">
                {step.num}
              </div>
              <div className="font-bold text-[13px] tracking-wide text-ink mb-1.5 uppercase">
                {step.title}
              </div>
              <div className="text-[12px] text-ink-muted leading-relaxed max-w-[160px] mx-auto">
                {step.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center px-6 md:px-12 pt-32 pb-16 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-16 max-w-[1200px] mx-auto w-full items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="font-sans font-black text-[clamp(2.8rem,6vw,4.8rem)] leading-[1.05] tracking-[-0.02em] text-ink"
          >
            Hola!, soy <span className="text-accent-2 italic">Jessica</span> —<br />
            Frontend & UX/UI Designer.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-[1.05rem] text-ink-muted max-w-[440px] line-height-relaxed"
          >
            Ingeniera de software con enfoque en diseño. Especializada en React, Flutter y Swift.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-2 mt-8"
          >
            {['React', 'Tailwind CSS', 'Flutter', 'Dart', 'Swift', 'SwiftUI', 'Node.js', 'TypeScript'].map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11.5px] px-3 py-1 rounded-full border border-ink-faint text-ink-muted bg-card tracking-wide transition-all hover:border-ink hover:text-ink hover:-translate-y-px"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex gap-4 mt-10"
          >
            <a
              href="#projects"
              className="text-[14px] font-semibold px-8 py-3 bg-ink text-surface rounded-sm transition-all hover:opacity-80 hover:-translate-y-0.5 tracking-wide"
            >
              Ver proyectos
            </a>
            <a
              href="#contact"
              className="text-[14px] font-medium px-8 py-3 border border-ink text-ink rounded-sm transition-all hover:bg-ink hover:text-surface"
            >
              Contactar
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="hidden md:flex flex-col gap-6 relative max-w-[500px] ml-auto w-full"
        >
          {/* ── Wrapper con altura fija para superponer las cards ── */}
          <div className="relative w-full h-[500px]">

            {/* ── CARD 1: Wireframe anotado (izquierda arriba) ── */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-0 top-4 w-[195px] bg-card border border-ink-faint rounded-xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.08)] z-10"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink/60 mb-3">
                Wireframe · v3
              </p>

              {/* Phone outline */}
              <div className="border-[1.5px] border-ink/20 rounded-[14px] p-2.5 relative">
                {/* Status bar */}
                <div className="flex justify-between mb-2">
                  <div className="w-6 h-1 rounded-full bg-ink/15" />
                  <div className="w-3.5 h-1 rounded-full bg-ink/15" />
                </div>
                {/* Hero block */}
                <div className="bg-surface-alt rounded-md h-10 flex items-center px-2 mb-1.5">
                  <div>
                    <div className="w-12 h-1 rounded-full bg-ink/20 mb-1" />
                    <div className="w-8 h-0.5 rounded-full bg-ink/10" />
                  </div>
                </div>
                {/* Grid cards */}
                <div className="grid grid-cols-2 gap-1 mb-1.5">
                  <div className="h-7 bg-surface-alt rounded" />
                  <div className="h-7 bg-surface-alt rounded border border-dashed border-ink/20" />
                </div>
                {/* CTA button — anotado */}
                <div className="h-3.5 bg-accent-2 rounded opacity-80 relative" />

                {/* Annotation dot */}
                <div className="absolute bottom-[18px] -right-[3px] w-1.5 h-1.5 rounded-full bg-accent-2" />
              </div>

              {/* Callout label */}
              <div className="absolute -right-[68px] bottom-[20px] flex items-center gap-0 z-20">
                <div className="w-[64px] h-px bg-accent-2" />
                <div className="bg-accent-2 text-white text-[9px] font-bold px-2 py-1 rounded whitespace-nowrap">
                  Primary CTA
                </div>
              </div>
            </motion.div>

            {/* ── CARD 2: Component states (derecha arriba) ── */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-0 top-0 w-[210px] bg-card border border-ink-faint rounded-xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.08)] z-20"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink/60 mb-3">
                Button · States
              </p>

              <div className="flex flex-col gap-2">
                {/* Default */}
                <div className="flex items-center gap-2.5">
                  <span className="text-[10px] text-ink/40 w-11 shrink-0">Default</span>
                  <div className="flex-1 h-7 rounded-md bg-accent-2 flex items-center justify-center">
                    <div className="w-10 h-0.5 rounded-full bg-white/50" />
                  </div>
                </div>
                {/* Hover */}
                <div className="flex items-center gap-2.5">
                  <span className="text-[10px] text-ink/40 w-11 shrink-0">Hover</span>
                  <div className="flex-1 h-7 rounded-md bg-[#a00000] border-2 border-accent-2 flex items-center justify-center">
                    <div className="w-10 h-0.5 rounded-full bg-white/60" />
                  </div>
                </div>
                {/* Disabled */}
                <div className="flex items-center gap-2.5">
                  <span className="text-[10px] text-ink/40 w-11 shrink-0">Disabled</span>
                  <div className="flex-1 h-7 rounded-md bg-surface-alt border border-ink-faint flex items-center justify-center">
                    <div className="w-10 h-0.5 rounded-full bg-ink/20" />
                  </div>
                </div>
                {/* Focus */}
                <div className="flex items-center gap-2.5">
                  <span className="text-[10px] text-ink/40 w-11 shrink-0">Focus</span>
                  <div
                    className="flex-1 h-7 rounded-md bg-accent-2 flex items-center justify-center"
                    style={{ boxShadow: '0 0 0 3px rgba(var(--accent2-rgb),0.25)' }}
                  >
                    <div className="w-10 h-0.5 rounded-full bg-white/50" />
                  </div>
                </div>
              </div>

              {/* Chips */}
              <div className="flex gap-1.5 flex-wrap mt-3 pt-3 border-t border-ink-faint">
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full border border-ink-faint text-ink/50 bg-surface-alt">
                  4 estados
                </span>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full border border-accent-2/30 text-accent-2 bg-accent-2/5">
                  WCAG AA
                </span>
              </div>
            </motion.div>

            {/* ── CARD 3: User flow (abajo, full width) ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-0 left-4 right-4 bg-card border border-ink-faint rounded-xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.08)] z-30"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink/60 mb-3">
                User flow · Onboarding
              </p>

              {/* Steps */}
              <div className="flex items-center">
                {/* Step 1 */}
                <div className="flex flex-col items-center flex-1">
                  <div className="w-8 h-8 rounded-full border border-ink/20 bg-surface-alt flex items-center justify-center mb-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-ink/40">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/>
                    </svg>
                  </div>
                  <span className="text-[10px] text-ink/40">Sign up</span>
                </div>

                {/* Connector */}
                <div className="flex-[0.3] h-px bg-ink/15" />

                {/* Step 2 — activo */}
                <div className="flex flex-col items-center flex-1">
                  <div
                    className="w-8 h-8 rounded-full border-[1.5px] border-accent-2 flex items-center justify-center mb-1"
                    style={{ background: 'rgba(var(--accent2-rgb),0.08)' }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-accent-2">
                      <rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>
                    </svg>
                  </div>
                  <span className="text-[10px] text-accent-2 font-medium">Profile</span>
                </div>

                {/* Connector dashed */}
                <div className="flex-[0.3] h-px border-t border-dashed border-ink/15" />

                {/* Step 3 */}
                <div className="flex flex-col items-center flex-1">
                  <div className="w-8 h-8 rounded-full border border-dashed border-ink/20 bg-surface-alt flex items-center justify-center mb-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-ink/30">
                      <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
                    </svg>
                  </div>
                  <span className="text-[10px] text-ink/40">Dashboard</span>
                </div>

                {/* Connector dashed */}
                <div className="flex-[0.3] h-px border-t border-dashed border-ink/10" />

                {/* Step 4 */}
                <div className="flex flex-col items-center flex-1">
                  <div className="w-8 h-8 rounded-full border border-dashed border-ink/10 bg-surface-alt flex items-center justify-center mb-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-ink/20">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <span className="text-[10px] text-ink/30">Done</span>
                </div>
              </div>

              {/* Metric row */}
              <div className="flex justify-between items-center mt-3 pt-3 border-t border-ink-faint">
                <span className="text-[11px] text-ink/60">Drop-off en paso 2</span>
                <span className="text-[13px] font-semibold text-accent-2">−18% tras rediseño</span>
              </div>
            </motion.div>

            {/* ── Cursor flotante animado ── */}
            <motion.div
              animate={{ x: [195, 230, 195], y: [180, 200, 180] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-0 left-0 z-40 pointer-events-none flex items-start gap-0.5"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.65376 12.3822L15.2026 14.9169L11.0324 19.1254L5.65376 12.3822Z" fill="#C00000"/>
                <path d="M12.3822 5.65376L14.9169 15.2026L19.1254 11.0324L12.3822 5.65376Z" fill="#C00000"/>
              </svg>
              <div className="ml-1 px-2 py-1 bg-accent-2 text-white text-[9px] font-bold rounded shadow-md">
                Jessica
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

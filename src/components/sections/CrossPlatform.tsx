import React from 'react';
import { motion } from 'framer-motion';
import { 
  CodeBracketIcon, 
  DevicePhoneMobileIcon, 
  CpuChipIcon, 
  SwatchIcon 
} from '@heroicons/react/24/outline';

const platforms = [
  { icon: CodeBracketIcon, name: 'React + Tailwind', desc: 'SPAs, SSR y web apps de alta performance con sistema de diseño a medida.', chips: ['React 18', 'Tailwind', 'Next.js', 'Vite'], color: 'rgba(20,184,166,0.15)' },
  { icon: DevicePhoneMobileIcon, name: 'Flutter · Dart', desc: 'Apps nativas de alta fidelidad para iOS y Android desde una base de código.', chips: ['Flutter 3', 'Dart', 'Riverpod', 'Bloc'], color: 'rgba(2,132,199,0.15)' },
  { icon: CpuChipIcon, name: 'Swift · SwiftUI', desc: 'Experiencias iOS nativas con HealthKit, ARKit y StoreKit integrados.', chips: ['Swift 5.9', 'SwiftUI', 'UIKit', 'Combine'], color: 'rgba(239,68,68,0.12)' },
  { icon: SwatchIcon, name: 'Design Systems', desc: 'Tokens compartidos. Figma como fuente única de verdad para todas las plataformas.', chips: ['Figma Tokens', 'Storybook', 'Style Dict'], color: 'rgba(91,79,207,0.15)' },
];

export const CrossPlatform: React.FC = () => {
  return (
    <section id="crossplatform" className="bg-ink text-surface py-20 px-6 md:px-12 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto">
        <div className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent-2 mb-2 reveal visible">
          // Stack técnico
        </div>
        <h2 className="font-sans font-black text-[clamp(2rem,3.5vw,3.2rem)] leading-tight text-surface mb-4 reveal visible">
          Una visión,<br />múltiples ecosistemas.
        </h2>
        <p className="text-[1.05rem] text-surface/60 max-w-[560px] leading-relaxed mb-12 reveal visible">
          Donde el diseño no se pierde en la implementación. Construyo interfaces que respetan la intención original en cada plataforma.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {platforms.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-surface/10 rounded-lg p-6 transition-all duration-300 hover:border-surface/30 hover:bg-surface/[0.04]"
            >
              <div className="w-11 h-11 rounded flex items-center justify-center text-xl mb-4" style={{ background: p.color }}>
                <p.icon className="w-6 h-6 text-surface" />
              </div>
              <div className="text-[15px] font-bold tracking-tight mb-1 text-surface">{p.name}</div>
              <div className="text-[13px] text-surface/50 leading-relaxed mb-4">{p.desc}</div>
              <div className="flex flex-wrap gap-1.5">
                {p.chips.map(chip => (
                  <span key={chip} className="font-mono text-[10px] px-2 py-0.5 bg-surface/10 rounded-full text-surface/50 tracking-wider">
                    {chip}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

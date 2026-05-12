import React from 'react';
import { motion } from 'framer-motion';

const posts = [
  {
    title: 'Cómo compartir design tokens entre Tailwind, Flutter y SwiftUI',
    excerpt: 'Style Dictionary como pipeline central: un JSON de tokens que se compila automáticamente a tres plataformas. Configuración paso a paso.',
    date: 'Mar 2025',
    tag: 'tutorial',
    readTime: '8 min',
    cat: 'Design Systems',
    color: 'linear-gradient(135deg,#1a1a2e,#2d2d5e)',
    codeSnippet: (
      <div className="font-mono text-[10px] text-white/30 text-center leading-relaxed">
        <div className="text-purple-400">tokens.json</div>
        <div>→ tailwind.config.js</div>
        <div className="text-blue-400">→ app_tokens.dart</div>
        <div className="text-red-400">→ AppTokens.swift</div>
      </div>
    )
  },
  {
    title: 'Rendimiento nativo en Flutter: ¿Mito o realidad en 2026?',
    excerpt: 'Análisis profundo del engine de Skia vs Impeller y cómo optimizar el repaint boundary para alcanzar los 120fps constantes.',
    date: 'Feb 2025',
    tag: 'performance',
    readTime: '12 min',
    cat: 'Mobile',
    color: 'linear-gradient(135deg,#0d2818,#1a5435)',
    codeSnippet: (
      <div className="font-mono text-[10px] text-white/30 text-center leading-relaxed">
        <div className="text-green-400">RepaintBoundary</div>
        <div>RenderObject.paint()</div>
        <div className="text-accent-2">Impeller Engine</div>
      </div>
    )
  },
  {
    title: 'SwiftUI para desarrolladores de React: Un puente mental',
    excerpt: 'Si entiendes el estado en React, ya entiendes SwiftUI. Cómo mapear useEffect, useState y Context a los wrappers de Apple.',
    date: 'Ene 2025',
    tag: 'conceptos',
    readTime: '10 min',
    cat: 'SwiftUI',
    color: 'linear-gradient(135deg,#1a0a2e,#3d1a78)',
    codeSnippet: (
      <div className="font-mono text-[10px] text-white/30 text-center leading-relaxed">
        <div className="text-blue-300">@State → useState</div>
        <div className="text-purple-300">@ObservedObject</div>
        <div className="text-red-300">EnvironmentKey</div>
      </div>
    )
  }
];

export const Blog: React.FC = () => {
  return (
    <section id="blog" className="bg-surface py-24 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent-2 mb-2 reveal visible">
          // Blog técnico
        </div>
        <h2 className="font-sans text-[clamp(2rem,3.5vw,3.2rem)] leading-tight text-ink mb-4 reveal visible">
          Pensamiento en público.
        </h2>
        <p className="text-[1.05rem] text-ink-muted max-w-[560px] leading-relaxed mb-12 reveal visible">
          Artículos técnicos sobre design systems cross-platform. Tres posts que son mejores cartas de presentación que cualquier descripción de proyecto.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.a
              key={i}
              href="#"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-ink-faint rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg group block no-underline text-inherit"
            >
              <div className="h-[140px] flex items-center justify-center relative overflow-hidden" style={{ background: post.color }}>
                <div className="absolute top-3 left-3 font-mono text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm">
                  {post.cat}
                </div>
                {post.codeSnippet}
              </div>
              
              <div className="p-5">
                <h3 className="font-sans text-[1.1rem] leading-snug text-ink mb-2 group-hover:text-accent-2 transition-colors">
                  {post.title}
                </h3>
                <p className="text-[13px] text-ink-muted leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] text-ink-faint">{post.date}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded border border-ink-faint text-ink-muted">
                      {post.tag}
                    </span>
                    <span className="text-[12px] text-ink-muted">{post.readTime}</span>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Playground: React.FC = () => {
  const [primaryColor, setPrimaryColor] = useState('#1a1a2e');
  const [accentColor, setAccentColor] = useState('#c8572a');
  const [surfaceColor, setSurfaceColor] = useState('#f5f3ef');
  const [radius, setRadius] = useState(14);
  const [fontSize, setFontSize] = useState(16);
  const [fontFamily, setFontFamily] = useState('Nohemi');
  const [activeCodeTab, setActiveCodeTab] = useState('Tailwind');

  const getCode = () => {
    if (activeCodeTab === 'Tailwind') {
      return `// tailwind.config.js theme: {
  extend: { colors: { primary:
  "${primaryColor}", accent: "${accentColor}",
  surface: "${surfaceColor}" },
  borderRadius: { lg: "${radius}px" },
  fontSize: { base: "${fontSize}px" },
  fontFamily: { display: ["${fontFamily}"] } } }`;
    }
    if (activeCodeTab === 'Flutter') {
      return `// app_tokens.dart
class AppTokens {
  static const primary = Color(0x${primaryColor.replace('#', 'FF')});
  static const accent = Color(0x${accentColor.replace('#', 'FF')});
  static const radiusLg = ${radius}.0;
  static const fontSizeBase = ${fontSize}.0;
  static const fontFamily = '${fontFamily}';
}`;
    }
    return `// AppTokens.swift
enum AppTokens {
  static let primary = Color(hex: "${primaryColor}")
  static let accent = Color(hex: "${accentColor}")
  static let radiusLg = CGFloat(${radius})
  static let fontSizeBase = CGFloat(${fontSize})
  static let fontFamily = "${fontFamily}"
}`;
  };

  return (
    <section id="tokens" className="bg-card py-24 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent-2 mb-2 reveal visible">
          // Design Token Playground
        </div>
        <h2 className="font-sans text-[clamp(2rem,3.5vw,3.2rem)] leading-tight text-ink mb-12 reveal visible">
          Laboratorio de diseño.
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-16 items-start">
          {/* Controls */}
          <div className="space-y-10">
            {/* Colors */}
            <div className="space-y-4">
              {[
                { label: 'color.primary', value: primaryColor, set: setPrimaryColor },
                { label: 'color.accent', value: accentColor, set: setAccentColor },
                { label: 'color.surface', value: surfaceColor, set: setSurfaceColor },
              ].map((c) => (
                <div key={c.label} className="flex items-center justify-between">
                  <span className="font-mono text-[14px] text-ink-muted">{c.label}</span>
                  <div className="relative">
                    <div 
                      className="w-10 h-10 rounded border border-ink-faint shadow-sm" 
                      style={{ background: c.value }} 
                    />
                    <input 
                      type="color" 
                      value={c.value} 
                      onChange={(e) => c.set(e.target.value)}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Shape and Size */}
            <div className="space-y-8">
              <div className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent-2">Forma y Tamaño</div>
              
              <div className="space-y-3">
                <div className="flex justify-between font-mono text-[14px] text-ink-muted">
                  <span>radius.lg</span>
                  <div className="flex items-center gap-1">
                    <span className="text-ink">{radius}</span>
                    <span className="text-ink-faint">px</span>
                  </div>
                </div>
                <input 
                  type="range" min="0" max="32" value={radius} 
                  onChange={(e) => setRadius(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-ink-faint rounded-lg appearance-none cursor-pointer accent-accent-2"
                />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between font-mono text-[14px] text-ink-muted">
                  <span>font.size</span>
                  <div className="flex items-center gap-1">
                    <span className="text-ink">{fontSize}</span>
                    <span className="text-ink-faint">px</span>
                  </div>
                </div>
                <input 
                  type="range" min="12" max="24" value={fontSize} 
                  onChange={(e) => setFontSize(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-ink-faint rounded-lg appearance-none cursor-pointer accent-accent-2"
                />
              </div>
            </div>

            {/* Typography */}
            <div className="space-y-6">
              <div className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent-2">Tipografía</div>
              <div className="space-y-3">
                <div className="font-mono text-[14px] text-ink-muted">font.display</div>
                <select 
                  value={fontFamily} 
                  onChange={(e) => setFontFamily(e.target.value)}
                  className="w-full bg-surface-alt border border-ink-faint rounded px-4 py-2.5 text-ink outline-none focus:border-accent-2 transition-colors"
                >
                  <option value="Nohemi">Nohemi (Main)</option>
                  <option value="Syne">Syne</option>
                  <option value="DM Serif Display">DM Serif Display</option>
                  <option value="Inter">Inter</option>
                  <option value="System">System Default</option>
                </select>
              </div>
            </div>

            {/* Code Output */}
            <div className="space-y-4">
              <div className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent-2">Código Generado</div>
              <div className="border border-ink-faint rounded-lg overflow-hidden bg-surface-alt/50">
                <div className="flex border-b border-ink-faint">
                  {['Tailwind', 'Flutter', 'SwiftUI'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveCodeTab(tab)}
                      className={`flex-1 py-2.5 text-[12px] font-semibold transition-all ${
                        activeCodeTab === tab ? 'text-accent-2 bg-white' : 'text-ink-muted hover:text-ink'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <div className="p-4 overflow-x-auto">
                  <pre className="font-mono text-[12px] leading-relaxed text-ink-muted whitespace-pre-wrap">
                    {getCode().split('\n').map((line, i) => {
                      if (line.startsWith('//')) return <div key={i} className="text-indigo-400">{line}</div>;
                      let formattedLine = line;
                      // Simple highlighting for common patterns
                      if (line.includes('"')) {
                        const parts = line.split('"');
                        return (
                          <div key={i}>
                            {parts[0]}
                            <span className="text-emerald-500">"{parts[1]}"</span>
                            {parts[2]}
                          </div>
                        );
                      }
                      return <div key={i}>{line}</div>;
                    })}
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Previews */}
          <div className="space-y-12">
            <div className="bg-card border border-ink-faint rounded-2xl overflow-hidden shadow-sm">
              <div className="h-10 bg-surface-alt border-b border-ink-faint flex items-center gap-2 px-4">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              </div>
              <div className="p-8 flex flex-col items-center justify-center min-h-[300px]" style={{ background: surfaceColor }}>
                <div className="max-w-[480px] w-full bg-card p-8 border border-ink-faint shadow-xl" style={{ borderRadius: `${radius}px` }}>
                  <h3 className="font-bold mb-4" style={{ fontFamily: `'${fontFamily}'`, fontSize: `${fontSize * 1.5}px`, color: primaryColor }}>Título del componente</h3>
                  <p className="text-ink-muted leading-relaxed mb-8" style={{ fontFamily: `'${fontFamily}'`, fontSize: `${fontSize}px` }}>
                    Texto con los tokens aplicados en tiempo real. Cambia los controles y observa el impacto en todas las plataformas.
                  </p>
                  <div className="flex gap-4">
                    <button 
                      style={{ background: primaryColor, borderRadius: `${radius * 0.5}px`, fontSize: `${fontSize * 0.9}px` }} 
                      className="text-white px-8 py-3 font-bold transition-transform hover:scale-105 active:scale-95"
                    >
                      Acción →
                    </button>
                    <button 
                      style={{ background: accentColor, borderRadius: `${radius * 0.5}px`, fontSize: `${fontSize * 0.8}px` }} 
                      className="text-white px-4 py-2 font-mono"
                    >
                      token activo
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="text-[11px] font-bold tracking-widest uppercase text-ink-faint flex items-center gap-4 after:content-[''] after:flex-1 after:h-[1px] after:bg-ink-faint">
                Mobile — Flutter + SwiftUI
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="text-[11px] font-bold tracking-widest uppercase text-ink-muted mb-4">Flutter Widget</div>
                  <div className="border-[1.5px] border-ink-faint rounded-2xl overflow-hidden h-[320px] flex flex-col bg-card">
                    <div className="h-6 bg-ink flex items-center justify-center">
                      <div className="w-10 h-1 bg-[#333] rounded-full" />
                    </div>
                    <div className="p-4 flex-1 flex flex-col gap-2" style={{ background: surfaceColor }}>
                      <div className="bg-card p-3 border border-ink-faint" style={{ borderRadius: `${radius * 0.8}px` }}>
                        <div className="font-bold text-[14px] mb-1" style={{ fontFamily: `'${fontFamily}'`, color: primaryColor }}>Flutter Widget</div>
                        <p className="text-[11px] text-ink-muted leading-relaxed" style={{ fontFamily: `'${fontFamily}'`, fontSize: `${fontSize * 0.7}px` }}>Mismos tokens exportados vía Style Dictionary.</p>
                      </div>
                      <button style={{ background: primaryColor, borderRadius: `${radius * 0.5}px`, fontFamily: `'${fontFamily}'`, fontSize: `${fontSize * 0.75}px` }} className="w-full text-white py-2 font-semibold mt-auto">
                        Acción →
                      </button>
                      <div className="flex gap-2">
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 font-mono">flutter</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-100 text-red-700 font-mono">dart</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="text-[11px] font-bold tracking-widest uppercase text-ink-muted mb-4">SwiftUI View</div>
                  <div className="border-[1.5px] border-ink-faint rounded-2xl overflow-hidden h-[320px] flex flex-col bg-card">
                    <div className="h-6 bg-ink flex items-center justify-center">
                      <div className="w-10 h-1 bg-[#333] rounded-full" />
                    </div>
                    <div className="p-4 flex-1 flex flex-col gap-2" style={{ background: surfaceColor }}>
                      <div className="bg-card p-3 border border-ink-faint" style={{ borderRadius: `${radius * 0.8}px` }}>
                        <div className="font-bold text-[14px] mb-1" style={{ fontFamily: `'${fontFamily}'`, color: primaryColor }}>SwiftUI View</div>
                        <p className="text-[11px] text-ink-muted leading-relaxed" style={{ fontFamily: `'${fontFamily}'`, fontSize: `${fontSize * 0.7}px` }}>Tokens Swift generados automáticamente desde el mismo JSON.</p>
                      </div>
                      <button style={{ background: accentColor, borderRadius: `${radius * 0.5}px`, fontFamily: `'${fontFamily}'`, fontSize: `${fontSize * 0.75}px` }} className="w-full text-white py-2 font-semibold mt-auto">
                        iOS Button
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

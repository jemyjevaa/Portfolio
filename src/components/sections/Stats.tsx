import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface StatItemProps {
  value: number;
  label: string;
  sub: string;
  suffix?: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, sub, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const stepTime = Math.abs(Math.floor(duration / end));
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, stepTime);
      
      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center p-4 border-r border-surface/10 last:border-r-0">
      <div className="font-nohemi font-black text-[3.2rem] text-accent-2 leading-none tracking-tighter">
        {count}{suffix}
      </div>
      <div className="text-[12px] text-surface mt-1 font-mono tracking-widest uppercase">
        {label}
      </div>
      <div className="text-[11px] text-surface/60 mt-0.5">
        {sub}
      </div>
    </div>
  );
};

export const Stats: React.FC = () => {
  return (
    <div id="stats" className="bg-ink py-16 px-6 md:px-12 transition-colors duration-300">
      <div className="max-w-[900px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-y-12 sm:gap-y-0">
        <StatItem value={14} label="Proyectos entregados" sub="web · mobile · cross-platform" suffix="+" />
        <StatItem value={7} label="Descargas acumuladas" sub="App Store + Google Play" suffix="k" />
        <StatItem value={8} label="Rating promedio" sub="en stores de aplicaciones" suffix="4." />
      </div>
    </div>
  );
};

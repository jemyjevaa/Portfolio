import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  const navItems = [
    { name: 'Sobre mí', id: 'about' },
    { name: 'Proyectos', id: 'projects' },
    { name: 'Stack', id: 'platform-compare' },
    //{ name: 'Tokens', id: 'playground' },
    //{ name: 'Blog', id: 'blog' },
    { name: 'Contacto', id: 'contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[200] flex items-center justify-between px-6 md:px-12 h-16 bg-nav backdrop-blur-xl border-b border-ink-faint transition-all duration-300">
      <Link to="/" className="font-mono text-[13px] tracking-widest text-ink uppercase">
        ∙PORTAFOLIO
      </Link>
      <ul className="hidden md:flex gap-8 list-none">
        {navItems.map((item) => (
          <li key={item.id}>
            {isHome ? (
              <a
                href={`#${item.id}`}
                className="text-[13px] font-medium tracking-wider text-ink-muted uppercase transition-colors hover:text-ink"
              >
                {item.name}
              </a>
            ) : (
              <Link
                to={`/#${item.id}`}
                className="text-[13px] font-medium tracking-wider text-ink-muted uppercase transition-colors hover:text-ink"
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="w-10 h-10 rounded-full bg-surface-alt border border-ink-faint cursor-pointer flex items-center justify-center text-ink transition-all hover:border-ink"
          title="Cambiar tema"
        >
          {theme === 'light' ? (
            <MoonIcon className="w-5 h-5" />
          ) : (
            <SunIcon className="w-5 h-5" />
          )}
        </button>
        {isHome ? (
          <a
            href="#contact"
            className="text-[13px] font-semibold tracking-wide px-5 py-2 bg-ink text-surface rounded-sm transition-all hover:opacity-80 hover:-translate-y-px"
          >
            Hablemos →
          </a>
        ) : (
          <Link
            to="/#contact"
            className="text-[13px] font-semibold tracking-wide px-5 py-2 bg-ink text-surface rounded-sm transition-all hover:opacity-80 hover:-translate-y-px"
          >
            Hablemos →
          </Link>
        )}
      </div>
    </nav>
  );
};

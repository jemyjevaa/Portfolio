/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: 'rgb(var(--ink-rgb) / <alpha-value>)',
          muted: 'var(--ink-muted)',
          faint: 'var(--ink-faint)',
        },
        surface: {
          DEFAULT: 'rgb(var(--surface-rgb) / <alpha-value>)',
          alt: 'rgb(var(--surface-alt-rgb) / <alpha-value>)',
        },
        accent: {
          1: 'var(--accent)',
          2: 'rgb(var(--accent2-rgb) / <alpha-value>)',
          3: 'var(--accent3)',
          4: 'var(--accent4)',
        },
        card: 'var(--card-bg)',
        nav: 'var(--nav-bg)',
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'serif'],
        sans: ['Nohemi', 'nohemi', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '3px',
        lg: '8px',
      },
      transitionTimingFunction: {
        ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      boxShadow: {
        DEFAULT: '0 8px 32px rgba(0,0,0,0.07)',
        lg: '0 20px 60px rgba(0,0,0,0.10)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fadeIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) both',
        'pulse-slow': 'pulse 2s infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
}

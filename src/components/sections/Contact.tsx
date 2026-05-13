import { ArrowUpRightIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { Github, Linkedin, Twitter } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-ink text-surface py-24 px-6 md:px-12 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-[680px] mx-auto text-center">
          <div className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent-2 mb-2">
            // Contacto
          </div>
          <h2 className="font-sans font-black text-[clamp(2.2rem,4.5vw,3.2rem)] leading-[1.1] text-surface mb-8 tracking-tighter">
            ¿Tienes una idea?<br />Hagámosla real.
          </h2>
          <p className="text-[0.95rem] font-body text-surface/60 leading-relaxed max-w-[540px] mx-auto mb-12">
            Busco proyectos que desafíen los límites de lo que una experiencia cross-platform puede ser. Si buscas coherencia, rendimiento y diseño, hablemos.
          </p>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=jessicavalderrama2003@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-[1.05rem] font-bold px-10 py-4 bg-accent-2 text-white rounded-lg transition-all hover:bg-[#a00000] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(192,0,0,0.35)] tracking-wide mb-12"
          >
            Contacto <ArrowUpRightIcon className="w-5 h-5" />
          </a>

          <div className="font-mono text-[11px] tracking-[0.15em] uppercase text-surface/20 mb-8">
            O encuéntrame en
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            {[

              { icon: <Linkedin size={16} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/jessica-aguilar-436317358?utm_source=share_via&utm_content=profile&utm_medium=member_ios' },
              { icon: <EnvelopeIcon className="w-4 h-4" />, label: 'Email', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=jessicavalderrama2003@gmail.com' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[13px] font-medium text-surface/65 px-5 py-2.5 border border-surface/10 rounded-lg transition-all hover:bg-surface/5 hover:border-surface/25 hover:text-surface hover:-translate-y-0.5"
              >
                {link.icon} {link.label}
              </a>
            ))}
          </div>

          <div className="inline-flex items-center gap-2 font-mono text-[12px] text-surface/30 mt-12 px-4 py-2 border border-surface/5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Disponible para nuevos retos
          </div>
        </div>
      </div>
    </section>
  );
};

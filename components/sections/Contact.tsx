'use client';

import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { ArrowRight, Mail, MessageCircle, Send } from 'lucide-react';

import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/utils';

const WHATSAPP_NUMBER = '5575998455810'; // ← substitua pelo seu número
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Olá! Vim pelo site da SAM e gostaria de conversar sobre uma solução digital.',
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const EMAIL = 'seuemail@exemplo.com'; // ← substitua pelo seu e-mail

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/seuusuario',
    icon: '/icons/social/instagram.svg',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/seuusuario',
    icon: '/icons/social/linkedin.svg',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/seuusuario',
    icon: '/icons/social/github.svg',
  },
];

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: string;
};

function useScrollReveal() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasRevealed = useRef(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRevealed.current) {
          hasRevealed.current = true;
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -80px 0px',
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

function Reveal({ children, className, delay = '0ms' }: RevealProps) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: isVisible ? delay : '0ms' }}
      className={cn(
        'transition-all duration-700 ease-out will-change-transform',
        isVisible
          ? 'translate-y-0 scale-100 opacity-100 blur-0'
          : 'translate-y-8 scale-[0.98] opacity-0 blur-sm',
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Contact() {
  return (
    <section
      id="contato"
      aria-labelledby="contato-titulo"
      className="bg-white py-24 sm:py-28 lg:py-32"
    >
      <Container>
        <div className="mx-auto max-w-5xl">
          {/* Cabeçalho */}
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue shadow-sm">
              <MessageCircle size={13} />
              Contato
            </span>

            <h2
              id="contato-titulo"
              className="mt-6 font-heading text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl"
            >
              Vamos transformar uma ideia em solução prática?
            </h2>

            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              Me conte o que você precisa organizar, automatizar ou melhorar no
              seu negócio. A conversa inicial é simples, direta e sem
              compromisso.
            </p>
          </Reveal>

          {/* Card principal */}
          <Reveal delay="150ms" className="mt-16">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_90px_rgba(15,23,42,0.08)]">
              <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
                {/* Coluna principal */}
                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-brand-blue">
                    <MessageCircle size={22} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-7 font-heading text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                    Fale comigo pelo WhatsApp.
                  </h3>

                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                    Explique rapidamente sua necessidade e eu te ajudo a
                    entender qual caminho faz mais sentido: automação, sistema,
                    dashboard, landing page ou organização digital.
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-12 items-center justify-center gap-2 rounded-[--radius-btn] bg-slate-950 px-6 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-[0_18px_50px_rgba(15,23,42,0.22)]"
                    >
                      Chamar no WhatsApp
                      <ArrowRight size={16} />
                    </a>

                    {/* <a
                      href={`mailto:${EMAIL}`}
                      className="inline-flex h-12 items-center justify-center gap-2 rounded-[--radius-btn] border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:text-brand-blue"
                    >
                      Enviar e-mail
                      <Mail size={16} />
                    </a> */}
                  </div>
                </div>

                {/* Coluna lateral */}
                <div className="border-t border-slate-200 bg-slate-50 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
                  <div>
                    <p className="hidden text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      E-mail
                    </p>

                    <a
                      href={`mailto:${EMAIL}`}
                      className="mt-3 hidden flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm font-medium text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:text-brand-blue"
                    >
                      <span className="break-all">{EMAIL}</span>
                      <Send size={16} className="shrink-0" />
                    </a>
                  </div>

                  <div className="mt-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Redes
                    </p>

                    <div className="mt-4 grid gap-3">
                      {socialLinks.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:text-brand-blue"
                        >
                          <span className="flex items-center gap-3">
                            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-slate-50">
                              <img
                                src={social.icon}
                                alt=""
                                aria-hidden="true"
                                className="h-4 w-4 object-contain opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                              />
                            </span>

                            {social.label}
                          </span>

                          <ArrowRight size={15} />
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm">
                    <p className="text-sm font-semibold text-slate-950">
                      Resposta objetiva.
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">
                      Me envie o contexto do seu problema e, se possível, um
                      exemplo do processo atual. Isso acelera o diagnóstico.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

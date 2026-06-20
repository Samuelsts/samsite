'use client';

import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { ArrowUpRight, Mail, MessageCircle } from 'lucide-react';
import Image from 'next/image';

import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/utils';

const WHATSAPP_NUMBER = '5575998455810'; // ← substitua pelo seu número
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Olá! Vim pelo site da SAM e gostaria de conversar sobre uma solução digital.',
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const EMAIL = 'seuemail@exemplo.com'; // ← substitua pelo seu e-mail

const footerLinks = [
  { label: 'Serviços', href: '/#servicos' },
  { label: 'Projetos', href: '/#projetos' },
  { label: 'Sobre', href: '/#sobre' },
  { label: 'Contato', href: '/#contato' },
];

const legalLinks = [
  { label: 'Política de Privacidade', href: '/privacidade' },
  { label: 'Termos de Uso', href: '/termos-de-uso' },
];

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

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white">
      <Container>
        <Reveal>
          <div className="border-t border-white/10 py-16 sm:py-20">
            <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
              {/* Marca e proposta */}
              <div>
                <a
                  href="#inicio"
                  className="inline-flex items-center"
                  aria-label="SAM Soluções Digitais — voltar ao topo"
                >
                  <Image
                    src="/logofinalbranco.svg"
                    alt="SAM Soluções Digitais"
                    width={104}
                    height={32}
                    priority
                    className="h-5 w-auto object-contain md:h-6"
                  />
                </a>

                <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400">
                  Tecnologia aplicada ao crescimento do seu negócio. Soluções
                  digitais práticas para organizar processos, automatizar
                  rotinas e transformar ideias em ferramentas úteis.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-[--radius-btn] bg-white px-5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100"
                  >
                    <MessageCircle size={16} />
                    Falar no WhatsApp
                  </a>
{/* 
                  <a
                    href={`mailto:${EMAIL}`}
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-[--radius-btn] border border-white/10 bg-white/[0.03] px-5 text-sm font-semibold text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                  >
                    <Mail size={16} />
                    Enviar e-mail
                  </a> */}
                </div>
              </div>

              {/* Navegação e redes */}
              <div className="grid gap-10 sm:grid-cols-2">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Navegação
                  </h3>

                  <nav className="mt-5 grid gap-3" aria-label="Rodapé">
                    {footerLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
                      >
                        {link.label}
                        <ArrowUpRight
                          size={14}
                          className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                        />
                      </a>
                    ))}
                  </nav>
                </div>

                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Redes
                  </h3>

                  <div className="mt-5 grid gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex w-fit items-center gap-3 text-sm font-medium text-slate-300 transition-colors hover:text-white"
                      >
                        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/[0.06]">
                          <img
                            src={social.icon}
                            alt=""
                            aria-hidden="true"
                            className="h-4 w-4 object-contain opacity-70 invert transition-opacity duration-300 group-hover:opacity-100"
                          />
                        </span>

                        {social.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Linha inferior */}
            <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
              <p>
                © {currentYear} SAM Soluções Digitais. Todos os direitos
                reservados.
              </p>

              <div className="space-y-3 sm:text-right">
                <p className="text-slate-600">
                  Feito com foco em clareza, performance e tecnologia útil.
                </p>

                <div className="flex flex-wrap gap-x-4 gap-y-2 sm:justify-end">
                  {legalLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="transition-colors hover:text-slate-300"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </footer>
  );
}

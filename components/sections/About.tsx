'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Cpu,
  CircleUserRound,
  Workflow,
} from 'lucide-react';

import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/utils';

const WHATSAPP_NUMBER = '5575998455810'; // ← substitua pelo seu número
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Olá! Vim pelo site e gostaria de conversar.',
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const PROFILE_IMAGE: string | null = null;

const credentials = [
  'Experiência prática com suporte técnico, ERP e atendimento a negócios reais.',
  'Foco em soluções simples, úteis e sem complexidade desnecessária.',
  'Visão técnica e operacional para transformar processos manuais em sistemas mais organizados.',
];

const highlights = [
  {
    label: 'Foco',
    value: 'Soluções práticas',
  },
  {
    label: 'Entrega',
    value: 'Clareza e eficiência',
  },
  {
    label: 'Perfil',
    value: 'Técnico + estratégico',
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

function ProfileVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_24px_90px_rgba(15,23,42,0.10)]">
        <div className="relative aspect-[4/3.35] overflow-hidden rounded-[1.5rem] bg-slate-950 sm:aspect-[4/4.85]">
          {PROFILE_IMAGE ? (
            <Image
              src={PROFILE_IMAGE}
              alt="Samuel Santos — SAM Soluções Digitais"
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-cover"
              priority={false}
            />
          ) : (
            <div className="relative flex h-full w-full flex-col justify-between overflow-hidden p-6 text-white sm:p-7">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(135deg,rgba(37,99,235,0.24),transparent_40%,rgba(255,255,255,0.06)_100%)]"
              />

              <div
                aria-hidden="true"
                className="absolute -right-20 top-10 h-52 w-52 rounded-full border border-white/10"
              />

              <div
                aria-hidden="true"
                className="absolute -bottom-16 -left-16 h-52 w-52 rounded-full border border-blue-400/20"
              />

              <div className="relative z-10">
                <div className="inline-flex h-13 w-13 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-blue-200 backdrop-blur-xl sm:h-14 sm:w-14">
                  <Cpu size={22} strokeWidth={1.8} />
                </div>

                <p className="mt-7 text-xs font-semibold uppercase tracking-[0.22em] text-white/45 sm:mt-8">
                  SAM Soluções Digitais
                </p>

                <h3 className="mt-3 max-w-[18rem] font-heading text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">
                  Tecnologia aplicada ao crescimento do seu negócio.
                </h3>
              </div>

              {/* Oculto no mobile para evitar corte */}
              <div className="relative z-10 hidden gap-3 sm:grid">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 backdrop-blur-xl"
                  >
                    <p className="text-xs font-medium uppercase tracking-[0.16em] text-white/40">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white/90">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-brand-blue">
            <Workflow size={19} strokeWidth={1.8} />
          </div>

          <div>
            <p className="font-heading text-sm font-bold text-slate-950">
              Soluções com pé no mundo real
            </p>
            <p className="mt-1 text-xs leading-relaxed text-slate-600">
              Processos, atendimento, dados e automações pensados para negócios
              que precisam funcionar melhor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function About() {
  return (
    <section
      id="sobre"
      aria-labelledby="sobre-titulo"
      className="bg-[#f8fafc] py-24 sm:py-28 lg:py-32"
    >
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <Reveal>
            <ProfileVisual />
          </Reveal>

          <div className="flex flex-col">
            <Reveal delay="100ms">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue shadow-sm">
                <CircleUserRound size={13} />
                Sobre
              </span>

              <h2
                id="sobre-titulo"
                className="mt-6 max-w-2xl font-heading text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl"
              >
                Tecnologia sem complicação, pensada para negócios reais.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                A SAM nasceu para ajudar pequenos negócios a organizarem
                processos, reduzirem retrabalho e usarem tecnologia de forma
                mais prática, clara e acessível.
              </p>
            </Reveal>

            <Reveal delay="200ms">
              <div className="mt-8 rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_18px_70px_rgba(15,23,42,0.06)]">
                <p className="text-base leading-relaxed text-slate-600">
                  Sou{' '}
                  <strong className="font-semibold text-slate-950">
                    Samuel Santos
                  </strong>
                  , profissional de tecnologia com experiência em suporte
                  técnico, sistemas ERP, atendimento a clientes e
                  desenvolvimento de soluções digitais. Meu foco é construir
                  ferramentas que resolvem problemas operacionais sem
                  transformar o simples em complicado.
                </p>
              </div>
            </Reveal>

            <Reveal delay="300ms">
              <ul className="mt-8 grid gap-3" role="list">
                {credentials.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm leading-relaxed text-slate-600 shadow-sm"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-brand-emerald"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay="400ms">
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-[--radius-btn] bg-slate-950 px-5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-[0_16px_45px_rgba(15,23,42,0.18)]"
                >
                  Conversar sobre uma solução
                  <ArrowRight size={16} />
                </a>

                <a
                  href="#projetos"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-[--radius-btn] border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:text-brand-blue"
                >
                  Ver projetos
                  <BadgeCheck size={16} />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

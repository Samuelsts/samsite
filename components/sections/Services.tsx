'use client';

import { useEffect, useRef, useState } from 'react';
import type { ElementType, ReactNode } from 'react';
import {
  ArrowRight,
  BarChart3,
  Globe,
  Layers,
  MessageSquare,
  Plug,
  Sparkles,
  Zap,
} from 'lucide-react';

import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/utils';

const services = [
  {
    icon: Zap,
    title: 'Automação de Processos',
    description:
      'Tarefas repetitivas eliminadas. Tempo devolvido para o que realmente faz seu negócio crescer.',
    tags: ['Rotinas', 'Alertas', 'Planilhas'],
  },
  {
    icon: BarChart3,
    title: 'Dashboards e Relatórios',
    description:
      'Seus dados organizados e visíveis em tempo real, sem planilhas bagunçadas ou informação perdida.',
    tags: ['Indicadores', 'Relatórios', 'Gestão'],
  },
  {
    icon: MessageSquare,
    title: 'Consultoria de Tecnologia',
    description:
      'Orientação direta para escolher e implementar as ferramentas certas para o seu negócio.',
    tags: ['Diagnóstico', 'Estratégia', 'Processos'],
  },
  {
    icon: Globe,
    title: 'Sites e Landing Pages',
    description:
      'Presença digital profissional, rápida e focada em converter visitantes em clientes.',
    tags: ['Sites', 'Campanhas', 'Conversão'],
  },
  {
    icon: Layers,
    title: 'Sistemas sob Demanda',
    description:
      'Uma solução criada para o seu fluxo específico — sem adaptações forçadas ou ferramentas genéricas.',
    tags: ['Controle', 'Cadastro', 'Operação'],
  },
  {
    icon: Plug,
    title: 'Integração de Ferramentas',
    description:
      'Seus sistemas conversando entre si, sem retrabalho manual nem informação duplicada.',
    tags: ['Sheets', 'Documentos', 'Formulários'],
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

interface ServiceCardProps {
  icon: ElementType;
  title: string;
  description: string;
  tags: string[];
  index: number;
}

function ServiceCard({
  icon: Icon,
  title,
  description,
  tags,
  index,
}: ServiceCardProps) {
  const number = String(index + 1).padStart(2, '0');

  return (
    <article className="group relative h-full overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)] transition-all duration-500 ease-out [transform-style:preserve-3d] hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_28px_90px_rgba(15,23,42,0.11)] hover:[transform:rotateX(1.5deg)_rotateY(-1.5deg)_translateY(-4px)]">
      {/* Faixa diagonal translúcida — referência visual do card 3D */}
      <div
        aria-hidden="true"
        className="absolute -right-16 -top-10 h-44 w-40 rotate-[18deg] rounded-[2rem] bg-gradient-to-b from-blue-600/12 via-blue-500/8 to-transparent transition-all duration-500 group-hover:-translate-y-2 group-hover:rotate-[14deg] group-hover:from-blue-600/18"
      />

      {/* Camada linear sutil no card */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(37,99,235,0.055)_0%,transparent_34%,transparent_68%,rgba(15,23,42,0.035)_100%)]"
      />

      {/* Número grande em background
      <span
        aria-hidden="true"
        className="absolute -right-3 top-5 font-heading text-8xl font-black leading-none text-slate-950/[0.035] transition-all duration-500 group-hover:text-blue-950/[0.055]"
      >
        {number}
      </span> */}

      {/* Ícone com efeito 3D leve */}
      <div className="relative z-10 mb-8 h-20">
        <div className="absolute left-0 top-1 h-14 w-14 rounded-2xl bg-slate-950/5 blur-md transition-all duration-500 group-hover:translate-y-2 group-hover:scale-110" />

        <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white bg-gradient-to-br from-white via-blue-50 to-slate-100 text-brand-blue shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_18px_35px_rgba(37,99,235,0.1)] transition-all duration-500 [transform:rotateX(10deg)_rotateY(-14deg)] group-hover:-translate-y-1 group-hover:scale-105 group-hover:[transform:rotateX(4deg)_rotateY(-8deg)]">
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-2xl bg-[linear-gradient(135deg,rgba(255,255,255,0.75),transparent_48%,rgba(37,99,235,0.12))]"
          />

          <Icon className="relative z-10" size={24} strokeWidth={1.9} />
        </div>
      </div>

      <div className="relative z-10">
        <h3 className="font-heading text-lg font-bold tracking-tight text-slate-950">
          {title}
        </h3>

        <p className="mt-3 min-h-[88px] text-sm leading-relaxed text-slate-600">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export function Services() {
  return (
    <section
      id="servicos"
      aria-labelledby="servicos-titulo"
      className="relative overflow-hidden bg-slate-50 py-24 sm:py-28 lg:py-32"
    >
      <Container className="relative z-10">
        {/* Cabeçalho */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue shadow-sm">
            <Sparkles size={13} />
            Soluções
          </span>

          <h2
            id="servicos-titulo"
            className="mt-6 font-heading text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl"
          >
            Ferramentas que trabalham por você.
          </h2>

          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            Do processo manual ao sistema que resolve sozinho — tecnologia
            aplicada ao dia a dia do seu negócio.
          </p>
        </Reveal>

        {/* Grid de cards */}
        <ul
          role="list"
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <li key={service.title}>
              <Reveal delay={`${index * 90}ms`} className="h-full">
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  tags={service.tags}
                  index={index}
                />
              </Reveal>
            </li>
          ))}
        </ul>

        {/* CTA final */}
        <Reveal delay="150ms" className="mt-16">
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
            {/* Faixa diagonal sutil no CTA */}
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-20 h-72 w-48 rotate-12 rounded-[2.5rem] bg-gradient-to-b from-blue-600/10 via-blue-500/5 to-transparent"
            />

            <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h3 className="font-heading text-2xl font-bold tracking-tight text-slate-950">
                  Não sabe por onde começar?
                </h3>

                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                  Podemos mapear um processo simples do seu negócio e encontrar
                  uma solução prática para reduzir retrabalho, organizar dados
                  ou melhorar seu atendimento.
                </p>
              </div>

              <a
                href="#contato"
                className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-[--radius-btn] border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:text-brand-blue hover:shadow-[0_16px_45px_rgba(37,99,235,0.12)]"
              >
                Solicitar diagnóstico
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

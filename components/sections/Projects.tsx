'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import type { ElementType, ReactNode } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  LayoutDashboard,
  PanelsTopLeft,
} from 'lucide-react';

import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/utils';

const projects = [
  {
    title: 'Controle de Sessões para Clínicas',
    category: 'Sistema sob demanda',
    status: 'Em desenvolvimento',
    description:
      'Sistema para acompanhar sessões realizadas, faltas, confirmações e saldo de atendimentos de pacientes.',
    icon: PanelsTopLeft,
    tags: ['Next.js', 'Controle interno', 'Saúde'],
    image: null,
    href: '#',
  },
  {
    title: 'Dashboard de Gastos com Deslocamento',
    category: 'Automação e relatórios',
    status: 'Finalizado',
    description:
      'Controle automatizado para registrar deslocamentos, calcular saldo e organizar prestação de contas.',
    icon: BarChart3,
    tags: ['Google Sheets', 'Apps Script', 'Automação'],
    image: null,
    href: '#',
  },
  {
    title: 'Landing Page SAM Soluções Digitais',
    category: 'Presença digital',
    status: 'Em desenvolvimento',
    description:
      'Página institucional premium para apresentar serviços digitais, automações e soluções sob demanda.',
    icon: LayoutDashboard,
    tags: ['Next.js', 'TailwindCSS', 'UI/UX'],
    image: null,
    href: '#',
  },
];

type Project = {
  title: string;
  category: string;
  status: string;
  description: string;
  icon: ElementType;
  tags: string[];
  image: string | null;
  href: string;
};

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

function ProjectImagePlaceholder({
  title,
  icon: Icon,
  isImageHovered,
}: {
  title: string;
  icon: ElementType;
  isImageHovered: boolean;
}) {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-slate-950">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(135deg,rgba(37,99,235,0.18),transparent_38%,rgba(15,23,42,0.2)_100%)]"
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        <div
          className={cn(
            'flex h-16 w-16 items-center justify-center rounded-3xl border border-white/10 bg-white/10 text-white shadow-[0_24px_80px_rgba(37,99,235,0.22)] backdrop-blur-xl transition-all duration-500',
            isImageHovered && 'md:-translate-y-1 md:scale-105',
          )}
        >
          <Icon size={28} strokeWidth={1.8} />
        </div>

        <p className="mt-4 max-w-[14rem] text-xs font-medium uppercase tracking-[0.18em] text-white/55">
          Imagem do projeto
        </p>

        <p className="mt-2 max-w-[16rem] text-sm font-semibold text-white/90">
          {title}
        </p>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [isImageHovered, setIsImageHovered] = useState(false);
  const Icon = project.icon;

  const handleImageEnter = () => {
    if (window.innerWidth >= 768) {
      setIsImageHovered(true);
    }
  };

  const handleImageLeave = () => {
    setIsImageHovered(false);
  };

  return (
    <article className="flex h-auto min-h-[31rem] flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.06)] transition-all duration-500 ease-out hover:border-blue-200 hover:shadow-[0_28px_90px_rgba(15,23,42,0.10)] md:h-[38rem] md:hover:-translate-y-1 lg:h-[39rem]">
      {/* Área da imagem */}
      <div
        onMouseEnter={handleImageEnter}
        onMouseLeave={handleImageLeave}
        className={cn(
          'relative h-[18rem] shrink-0 overflow-hidden border-b border-slate-100 bg-slate-100 transition-all duration-700 ease-out md:h-[15rem] md:cursor-pointer',
          isImageHovered && 'md:h-[70%]',
        )}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={`Imagem do projeto ${project.title}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className={cn(
              'object-cover transition-transform duration-700 ease-out',
              isImageHovered && 'md:scale-105',
            )}
          />
        ) : (
          <ProjectImagePlaceholder
            title={project.title}
            icon={Icon}
            isImageHovered={isImageHovered}
          />
        )}

        <div
          aria-hidden="true"
          className={cn(
            'absolute inset-0 bg-[linear-gradient(to_top,rgba(2,6,23,0.48),transparent_55%)] transition-opacity duration-500',
            isImageHovered ? 'md:opacity-45' : 'opacity-70',
          )}
        />

        <div className="absolute left-5 top-5 z-10 flex items-center gap-2">
          <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/85 backdrop-blur-xl">
            {project.status}
          </span>
        </div>

        <div
          className={cn(
            'absolute bottom-5 right-5 z-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white shadow-[0_18px_50px_rgba(2,6,23,0.22)] backdrop-blur-xl transition-all duration-500',
            isImageHovered && 'md:-translate-y-1 md:scale-105',
          )}
        >
          <Icon size={22} strokeWidth={1.8} />
        </div>
      </div>

      {/* Conteúdo */}
      <div className="flex min-h-0 flex-1 flex-col p-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-blue">
            {project.category}
          </p>

          <h3 className="mt-3 font-heading text-xl font-bold tracking-tight text-slate-950">
            {project.title}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            {project.description}
          </p>
        </div>

        {/* Conteúdo extra: oculto no mobile e some no hover da imagem no desktop */}
        <div
          className={cn(
            'hidden transition-all duration-500 ease-out md:block',
            isImageHovered
              ? 'md:pointer-events-none md:mt-0 md:max-h-0 md:overflow-hidden md:opacity-0'
              : 'md:max-h-[18rem] md:opacity-100',
          )}
        >
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Rodapé */}
        <div
          className={cn(
            'mt-auto border-t border-slate-100 pt-5 transition-all duration-500',
            isImageHovered
              ? 'md:pointer-events-none md:max-h-0 md:overflow-hidden md:border-transparent md:pt-0 md:opacity-0'
              : 'md:max-h-20 md:opacity-100',
          )}
        >
          <div className="flex items-center justify-between">
            <a
              href={project.href}
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition-colors hover:text-brand-blue"
            >
              Ver detalhes
              <ArrowRight size={16} />
            </a>

          </div>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section
      id="projetos"
      aria-labelledby="projetos-titulo"
      className="bg-white py-24 sm:py-28 lg:py-32"
    >
      <Container>
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue shadow-sm">
            <BadgeCheck size={13} />
            Projetos
          </span>

          <h2
            id="projetos-titulo"
            className="mt-6 font-heading text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl"
          >
            Projetos pensados para resolver problemas reais.
          </h2>

          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            Alguns projetos próprios e experimentais que mostram como tecnologia
            pode organizar processos, reduzir retrabalho e melhorar a operação
            de pequenos negócios.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={`${index * 110}ms`}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

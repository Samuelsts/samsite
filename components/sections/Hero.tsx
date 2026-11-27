import { ArrowDown, MessageCircle } from "lucide-react";

import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { whatsappUrl } from "@/lib/site";

/**
 * Hero (sempre escuro: data-surface="inverse").
 * - Título e subtítulo SEM animação de entrada: são o elemento medido pelo LCP.
 * - Sem filter: blur(). O brilho usa radial-gradient (barato) animado só por transform.
 * - Órbitas decorativas (referência: Ferrule) em SVG estático.
 */
export function Hero() {
  return (
    <section
      id="inicio"
      aria-label="Apresentação"
      data-surface="inverse"
      className="relative flex min-h-[calc(100dvh-4rem)] items-center overflow-hidden"
    >
      {/* Brilho azul superior esquerdo */}
      <div
        aria-hidden="true"
        className="sam-glow-primary pointer-events-none absolute -left-64 -top-64 h-[46rem] w-[46rem] rounded-full bg-[radial-gradient(closest-side,rgb(37_99_235/0.5),transparent)]"
      />

      {/* Brilho azul-claro inferior direito */}
      <div
        aria-hidden="true"
        className="sam-glow-secondary pointer-events-none absolute -bottom-72 -right-48 h-[48rem] w-[48rem] rounded-full bg-[radial-gradient(closest-side,rgb(96_165_250/0.3),transparent)]"
      />

      {/* Órbitas */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1000 1000"
        fill="none"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[140%] w-auto max-w-none -translate-x-1/2 -translate-y-1/2 md:h-[170%]"
      >
        <circle cx="500" cy="500" r="260" className="stroke-border" />
        <circle cx="500" cy="500" r="380" className="stroke-border" />
        <circle cx="500" cy="500" r="490" className="stroke-border" />
        <circle cx="240" cy="500" r="3.5" className="fill-accent-text" />
        <circle cx="810" cy="300" r="3.5" className="fill-accent-text" />
        <circle cx="610" cy="878" r="3.5" className="fill-accent-text" />
      </svg>

      {/* Vinheta: suaviza as bordas e dá profundidade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_45%,transparent_0%,var(--surface)_100%)]"
      />

      <Container className="relative z-10 py-24 md:py-32">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-text-muted">
            <span aria-hidden="true" className="h-px w-8 bg-border-strong" />
            Diagnóstico e ferramentas sob medida
          </p>

          <h1 className="mt-6 font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-text-primary md:text-6xl lg:text-7xl">
            Pare de repetir o que uma{" "}
            <span className="text-accent-text">ferramenta</span> pode fazer por
            você.
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-text-secondary md:text-xl">
            Eu mapeio tarefas repetitivas e crio ferramentas sob medida, de
            planilhas inteligentes a pequenos sistemas, para pequenas empresas e
            profissionais.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href={whatsappUrl()} variant="inverse" pill>
              <MessageCircle size={16} />
              Falar no WhatsApp
            </ButtonLink>

            <ButtonLink href="#como-funciona" variant="ghost" pill>
              Ver como funciona
              <ArrowDown size={16} />
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

import { ArrowDown, MessageCircle } from "lucide-react";

import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { whatsappUrl } from "@/lib/site";

/* ─── Palavra que troca no título (CSS puro; ver .sam-word no globals.css) ───
   Só palavras FEMININAS: a frase tem "uma ___ pode fazer por você".
   4 palavras x 3s = ciclo de 12s (igual ao keyframe). Se mudar a quantidade,
   ajustar as porcentagens do keyframe e o animation-duration em .sam-word. */
const WORDS = ["ferramenta", "automação", "solução", "aplicação"];
const WORD_STEP = 3; // segundos que cada palavra ocupa no ciclo
const WORD_FADE = 0.36; // 3% de 12s: faz a 1ª palavra já nascer visível

/* ─── Órbitas ───
   O wrapper é um quadrado centralizado. O SVG desenha os círculos (viewBox 1000,
   raios 260 / 380 / 490). Cada órbita animada é uma caixa quadrada que gira; o
   `inset` faz o raio da caixa coincidir com o do círculo:
     inset = (1 - 2*raio/1000) / 2  ->  260: 24%  |  380: 12%  |  490: 1%
   `start` = ângulo inicial da caixa (graus, sentido horário a partir do topo),
   escolhido para os pontos já aparecerem na tela no 1º quadro (ajustado p/ um
   desktop ~1920x900; em outros tamanhos algum ponto pode começar fora da vista).
   `dots` = ângulos dos pontos dentro da caixa. Só em md+ (celular: pontos fixos). */
const ORBITS = [
  {
    inset: "inset-[24%]",
    duration: 36,
    start: 300,
    reverse: false,
    dots: [0, 170],
  },
  {
    inset: "inset-[12%]",
    duration: 52,
    start: 70,
    reverse: true,
    dots: [0, 200],
  },
  { inset: "inset-[1%]", duration: 64, start: 250, reverse: false, dots: [0] },
];

// Atraso NEGATIVO = a animação já começa "adiantada", no ângulo inicial desejado.
function orbitDelay(duration: number, start: number, reverse: boolean) {
  const progress = reverse ? 1 - start / 360 : start / 360;

  return `${(-progress * duration).toFixed(2)}s`;
}

/**
 * Hero (sempre escuro: data-surface="inverse").
 * - Título/subtítulo SEM animação de entrada (LCP). A palavra destaque troca por
 *   CSS e a página já abre com a 1ª palavra visível.
 * - Sem filter: blur(). Brilhos e órbitas animam só por transform.
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
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 aspect-square h-[140%] -translate-x-1/2 -translate-y-1/2 md:h-[170%]"
      >
        <svg viewBox="0 0 1000 1000" fill="none" className="h-full w-full">
          <circle cx="500" cy="500" r="260" className="stroke-border" />
          <circle cx="500" cy="500" r="380" className="stroke-border" />
          <circle cx="500" cy="500" r="490" className="stroke-border" />

          {/* Pontos fixos, sobre os círculos (só celular; em md+ os pontos giram) */}
          <g className="md:hidden">
            <circle cx="240" cy="500" r="5" className="fill-accent-text" />
            <circle cx="744" cy="589" r="5" className="fill-accent-text" />
            <circle cx="829" cy="310" r="5" className="fill-accent-text" />
            <circle cx="143" cy="630" r="5" className="fill-accent-text" />
            <circle cx="415" cy="983" r="5" className="fill-accent-text" />
          </g>
        </svg>

        {/* Pontos em órbita (md+) */}
        {ORBITS.map((orbit) => (
          <div
            key={orbit.inset}
            className={`sam-orbit absolute hidden md:block ${orbit.inset}`}
            style={{
              animationDuration: `${orbit.duration}s`,
              animationDelay: orbitDelay(
                orbit.duration,
                orbit.start,
                orbit.reverse,
              ),
              animationDirection: orbit.reverse ? "reverse" : "normal",
            }}
          >
            {orbit.dots.map((angle) => (
              <span
                key={angle}
                className="absolute inset-0"
                style={{ transform: `rotate(${angle}deg)` }}
              >
                <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-text shadow-[0_0_14px_rgb(96_165_250/0.85)]" />
              </span>
            ))}
          </div>
        ))}
      </div>

      {/* Vinheta: suaviza as bordas e dá profundidade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_45%,transparent_0%,var(--surface)_100%)]"
      />

      <Container className="relative z-10 py-24 md:py-32">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <h1 className="font-heading text-4xl font-semibold leading-[1.08] tracking-tight text-text-primary md:text-6xl lg:text-7xl">
            <span className="block">Pare de repetir o que uma</span>{" "}
            {/* Palavras empilhadas na MESMA célula: a troca não desloca o layout */}
            <span
              aria-hidden="true"
              className="grid justify-items-center text-accent-text"
            >
              {WORDS.map((word, index) => (
                <span
                  key={word}
                  className="sam-word col-start-1 row-start-1"
                  style={{
                    animationDelay: `${(index * WORD_STEP - WORD_FADE).toFixed(2)}s`,
                  }}
                >
                  {word}
                </span>
              ))}
            </span>
            {/* Leitores de tela e buscadores leem a frase completa */}
            <span className="sr-only">{WORDS[0]}</span>{" "}
            <span className="block">pode fazer por você.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-text-secondary md:text-xl">
            Eu mapeio tarefas repetitivas e crio ferramentas sob medida, para
            pequenas empresas e profissionais.
          </p>

          <div className="sam-animate-fade-up sam-delay-300 mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
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

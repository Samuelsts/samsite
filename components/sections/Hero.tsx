import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

const WHATSAPP_NUMBER = '5575998455810'; // ← mesmo número do Header
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Olá! Vim pelo site e gostaria de conversar.',
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export function Hero() {
  return (
    <section
      id="inicio"
      aria-label="Apresentação"
      className="relative flex min-h-[calc(100dvh-4rem)] items-center overflow-hidden bg-slate-950"
    >
      {/* Grade geométrica maior */}
      <div
        aria-hidden="true"
        className="sam-animate-fade-in sam-delay-100 pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[size:10rem_10rem]"
      />

      {/* Glow superior esquerdo animado */}
      <div
        aria-hidden="true"
        className="sam-glow-primary pointer-events-none absolute -left-44 -top-36 h-[38rem] w-[38rem] rounded-full bg-blue-600/50 blur-[58px]"
      />

      {/* Glow inferior direito animado */}
      <div
        aria-hidden="true"
        className="sam-glow-secondary pointer-events-none absolute -bottom-48 right-0 h-[40rem] w-[40rem] rounded-full bg-violet-600/45 blur-[64px]"
      />

      {/* Glow central sutil */}
      <div
        aria-hidden="true"
        className="sam-glow-center pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[85px]"
      />

      {/* Vinheta para suavizar a grade e dar profundidade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_45%,rgba(15,23,42,0)_0%,#020617_100%)]"
      />

      <Container className="relative z-10 py-24 md:py-36">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          {/* Título */}
          <h1 className="sam-animate-fade-up sam-delay-200 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
            Organize. <span className="text-brand-blue">Automatize.</span>
            <br />
            Cresça com{' '}
            <span className="relative inline-block pb-3">
              tecnologia.
              <svg
                aria-hidden="true"
                className=" sam-delay-700 absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 8 Q50 2 100 6 Q150 10 200 4"
                  stroke="#2563EB"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.65"
                  strokeDasharray="220"
                  strokeDashoffset="220"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="220"
                    to="0"
                    dur="1.15s"
                    begin="0.45s"
                    fill="freeze"
                    calcMode="spline"
                    keySplines="0.22 1 0.36 1"
                  />
                </path>
              </svg>
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="sam-animate-fade-up sam-delay-400 mt-8 max-w-2xl text-base leading-relaxed text-slate-300 md:text-xl">
            Tecnologia prática que organiza sua operação, elimina retrabalho e
            libera tempo para o que realmente importa.
          </p>

          {/* CTAs */}
          <div className=" sam-animate-fade-up sam-delay-600 mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {/* <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" size="lg" className="shadow-none">
                Falar no WhatsApp
              </Button>
            </a> */}

            <a
              href="#servicos"
              className="sam-animate-fade-up sam-delay-600 inline-flex h-11 items-center justify-center gap-2 rounded-[--radius-btn] border border-white/10 bg-white/5 px-5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
            >
              Ver soluções
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

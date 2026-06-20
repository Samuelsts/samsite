import Link from 'next/link';
import { ArrowLeft, Home, SearchX } from 'lucide-react';

import { Container } from '@/components/ui/Container';

export default function NotFound() {
  return (
    <main className="min-h-dvh bg-slate-950 text-white">
      <section className="relative flex min-h-dvh items-center overflow-hidden">
        {/* Fundo discreto */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.07)_1px,transparent_1px)] bg-[size:8rem_8rem]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_45%,rgba(37,99,235,0.12)_0%,rgba(2,6,23,0)_45%,#020617_100%)]"
        />

        <Container className="relative z-10">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            {/* Ícone */}
            <div className="flex h-16 w-16 items-center justify-center rounded-3xl border border-white/10 bg-white/[0.06] text-blue-300 shadow-[0_24px_80px_rgba(37,99,235,0.18)] backdrop-blur-xl">
              <SearchX size={28} strokeWidth={1.8} />
            </div>

            {/* Código */}
            <p className="mt-8 font-heading text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
              Erro 404
            </p>

            {/* Título */}
            <h1 className="mt-5 font-heading text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Essa página saiu do fluxo.
            </h1>

            {/* Texto */}
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              O endereço acessado não existe, foi removido ou está incorreto.
              Volte para a página inicial e continue navegando pelas soluções da
              SAM.
            </p>

            {/* Ações */}
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-[--radius-btn] bg-white px-5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100"
              >
                <Home size={16} />
                Voltar para o início
              </Link>

              <Link
                href="/#servicos"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-[--radius-btn] border border-white/10 bg-white/[0.04] px-5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.08]"
              >
                Ver soluções
                <ArrowLeft size={16} className="rotate-180" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
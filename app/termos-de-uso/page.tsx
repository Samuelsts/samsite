import type { Metadata } from 'next';
import Link from 'next/link';

import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Termos de Uso | SAM Soluções Digitais',
  description:
    'Termos de Uso da SAM Soluções Digitais para acesso e utilização do site.',
};

export default function TermsPage() {
  return (
    <>
      <main className="bg-surface-alt py-16 text-text-primary sm:py-20">
        <Container className="max-w-4xl">
          <Link
            href="/"
            className="text-sm font-semibold text-brand-blue transition-colors hover:text-brand-blue-light"
          >
            Voltar para o site
          </Link>

          <article className="mt-8 rounded-[--radius-card] border border-border bg-surface p-6 shadow-card sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-text-muted">
              SAM Soluções Digitais
            </p>

            <h1 className="mt-4 font-heading text-3xl font-bold tracking-normal text-text-primary sm:text-4xl">
              Termos de Uso
            </h1>

            <p className="mt-5 text-sm text-text-secondary">
              Última atualização: 18 de junho de 2026
            </p>

            <div className="mt-8 space-y-8 text-base leading-relaxed text-text-secondary">
              <section>
                <h2 className="font-heading text-xl font-semibold text-text-primary">
                  1. Aceitação dos termos
                </h2>
                <p className="mt-3">
                  Ao acessar este site, você concorda com estes Termos de Uso. Se
                  não concordar com alguma condição, recomendamos que não utilize
                  o site.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-text-primary">
                  2. Uso do site
                </h2>
                <p className="mt-3">
                  O conteúdo deste site tem finalidade informativa e comercial.
                  Você se compromete a utilizá-lo de forma lícita, sem tentar
                  comprometer sua segurança, disponibilidade ou funcionamento.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-text-primary">
                  3. Propriedade intelectual
                </h2>
                <p className="mt-3">
                  Textos, marcas, elementos visuais, estrutura e demais conteúdos
                  do site pertencem à SAM Soluções Digitais ou são utilizados com
                  autorização. A reprodução sem autorização prévia não é
                  permitida.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-text-primary">
                  4. Serviços e propostas
                </h2>
                <p className="mt-3">
                  Informações sobre serviços, projetos e soluções não constituem
                  obrigação de contratação. Condições comerciais, prazos e
                  entregas serão definidos em proposta específica, quando
                  aplicável.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-text-primary">
                  5. Links externos
                </h2>
                <p className="mt-3">
                  O site pode conter links para plataformas externas, como redes
                  sociais ou canais de atendimento. Não nos responsabilizamos por
                  conteúdos, políticas ou práticas de terceiros.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-text-primary">
                  6. Alterações dos termos
                </h2>
                <p className="mt-3">
                  Estes Termos de Uso podem ser atualizados a qualquer momento.
                  A versão vigente será publicada nesta página.
                </p>
              </section>
            </div>
          </article>
        </Container>
      </main>

      <Footer />
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';

import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';

export const metadata: Metadata = {
  title: 'Política de Privacidade | SAM Soluções Digitais',
  description:
    'Política de Privacidade da SAM Soluções Digitais sobre coleta, uso e proteção de dados pessoais.',
};

export default function PrivacyPage() {
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
              Política de Privacidade
            </h1>

            <p className="mt-5 text-sm text-text-secondary">
              Última atualização: 18 de junho de 2026
            </p>

            <div className="mt-8 space-y-8 text-base leading-relaxed text-text-secondary">
              <section>
                <h2 className="font-heading text-xl font-semibold text-text-primary">
                  1. Introdução
                </h2>
                <p className="mt-3">
                  Bem-vindo ao site da SAM. A sua privacidade é importante. Esta
                  Política de Privacidade descreve como informações podem ser
                  coletadas, utilizadas e protegidas durante a navegação em
                  nosso site. Ao acessar este site, você concorda com os termos
                  descritos nesta política.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-text-primary">
                  2. Quem somos
                </h2>
                <p className="mt-3">
                  A SAM é uma iniciativa independente voltada para tecnologia,
                  desenvolvimento web, automação, suporte técnico e criação de
                  soluções digitais. Site oficial: <strong>samlabs.com.br</strong> <br/>Contato:
                  WhatsApp disponível através dos links presentes no site.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-text-primary">
                  3. Informações coletadas
                </h2>
                <p className="mt-3">
                  Atualmente, este site não solicita cadastro de usuários, não
                  possui área de login e não realiza coleta direta de dados
                  pessoais por meio de formulários. Entretanto, algumas
                  informações técnicas podem ser registradas automaticamente
                  durante a navegação, incluindo: Endereço IP Tipo de navegador
                  Sistema operacional Data e hora de acesso Páginas visitadas
                  Informações de desempenho e segurança Esses dados podem ser
                  coletados por provedores de hospedagem, redes de distribuição
                  de conteúdo (CDNs) e ferramentas de análise utilizadas pelo
                  site.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-text-primary">
                  4. Ferramentas de análise e monitoramento
                </h2>
                <p className="mt-3">
                  Para melhorar a experiência dos visitantes e compreender o uso
                  do site, a SAM poderá utilizar ferramentas de análise e
                  monitoramento, incluindo, mas não se limitando a: Google
                  Analytics Google Tag Manager Microsoft Clarity Meta Pixel
                  Essas ferramentas podem coletar informações estatísticas e
                  comportamentais de forma automatizada para fins de análise,
                  desempenho, marketing e melhoria contínua dos serviços.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-text-primary">
                  5. Cookies
                </h2>
                <p className="mt-3">
                  Este site poderá utilizar cookies e tecnologias semelhantes
                  para: Garantir o funcionamento adequado do site; Melhorar a
                  experiência de navegação; Analisar métricas de acesso; Medir
                  desempenho de campanhas e conteúdos. O usuário pode configurar
                  seu navegador para bloquear ou remover cookies a qualquer
                  momento. O bloqueio de determinados cookies pode afetar
                  parcialmente algumas funcionalidades do site.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-text-primary">
                  6. Links para terceiros
                </h2>
                <p className="mt-3">
                  O site contém links para plataformas externas, incluindo:
                  WhatsApp Instagram LinkedIn GitHub Ao acessar qualquer serviço
                  externo, o usuário estará sujeito às respectivas políticas de
                  privacidade e termos de uso dessas plataformas. A SAM não
                  possui controle sobre as práticas de privacidade adotadas por
                  terceiros.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-text-primary">
                  7. Compartilhamento de informações
                </h2>
                <p className="mt-3">
                  A SAM não comercializa, aluga ou compartilha dados pessoais de
                  visitantes com terceiros para fins comerciais. Informações
                  eventualmente coletadas poderão ser compartilhadas apenas
                  quando: Exigido por obrigação legal; Necessário para
                  cumprimento de ordem judicial; Necessário para proteção dos
                  direitos da SAM; Necessário para operação técnica do site por
                  provedores de hospedagem e infraestrutura.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-text-primary">
                  8. Segurança das informações
                </h2>
                <p className="mt-3">
                  São adotadas medidas técnicas e organizacionais razoáveis para
                  proteger as informações processadas pelo site contra acesso
                  não autorizado, alteração, divulgação ou destruição indevida.
                  Apesar dos esforços empregados, nenhum sistema conectado à
                  internet pode garantir segurança absoluta.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-text-primary">
                  9. Direitos dos titulares de dados
                </h2>
                <p className="mt-3">
                  Nos termos da Lei Geral de Proteção de Dados (Lei nº
                  13.709/2018 – LGPD), o titular dos dados possui direitos
                  relacionados ao tratamento de suas informações pessoais,
                  incluindo: Confirmação da existência de tratamento; Acesso aos
                  dados; Correção de dados incompletos ou desatualizados;
                  Solicitação de exclusão quando aplicável; Informações sobre
                  compartilhamento de dados; Revogação de consentimento quando
                  cabível. Solicitações podem ser realizadas por meio dos canais
                  de contato disponibilizados no site.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-text-primary">
                  10. Armazenamento e retenção
                </h2>
                <p className="mt-3">
                  Os dados eventualmente coletados serão mantidos apenas pelo
                  período necessário para cumprir as finalidades descritas nesta
                  política, obrigações legais ou requisitos operacionais
                  legítimos.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-text-primary">
                  11. Alterações desta política
                </h2>
                <p className="mt-3">
                  Esta Política de Privacidade poderá ser atualizada
                  periodicamente para refletir mudanças legais, operacionais ou
                  tecnológicas. A versão mais recente estará sempre disponível
                  nesta página.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-xl font-semibold text-text-primary">
                  12. Contato
                </h2>
                <p className="mt-3">
                  Em caso de dúvidas relacionadas a esta Política de Privacidade
                  ou ao tratamento de dados pessoais, entre em contato através
                  dos canais oficiais disponibilizados em: samlabs.com.br
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

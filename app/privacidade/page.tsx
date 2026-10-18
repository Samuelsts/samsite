import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Política de Privacidade | SAM Soluções Digitais",
  description:
    "Política de Privacidade da SAM Soluções Digitais sobre coleta, uso e proteção de dados pessoais.",
};

const sections = [
  {
    title: "1. Quem somos (controlador)",
    body: "Este site, disponível em samlabs.com.br, é mantido por Samuel J. Santos, sob o nome SAM Soluções Digitais, que atua como controlador dos dados descritos nesta política. Contato: contatosam.info@gmail.com ou WhatsApp, pelos links do site.",
  },
  {
    title: "2. Dados que tratamos",
    body: "O site não tem cadastro, login nem formulários. Tratamos: (a) dados técnicos de acesso (endereço IP, navegador, sistema operacional, páginas visitadas e horário), registrados pela hospedagem e pela infraestrutura de rede para operação e segurança do site (base legal: legítimo interesse, art. 7º, IX, da LGPD); (b) as informações que você enviar ao nos chamar pelo WhatsApp, usadas para responder e preparar uma proposta, a seu pedido (art. 7º, V); e (c) dados de medição de audiência, descritos abaixo, somente se você aceitar.",
  },
  {
    title: "3. Medição de audiência (Google Analytics)",
    body: 'Usamos o Google Analytics para entender como o site é usado, como páginas visitadas, tempo de visita e tipo de dispositivo. Ele só é carregado se você aceitar no banner de cookies (base legal: consentimento, art. 7º, I). Antes da sua escolha, e se você recusar, nenhum script de medição é executado. Você pode mudar de ideia a qualquer momento em "Preferências de cookies", no rodapé. Se passarmos a usar outras ferramentas, atualizaremos esta política e pediremos sua escolha novamente.',
  },
  {
    title: "4. Cookies",
    body: "O site não cria cookies próprios para funcionar. Se você aceitar a medição, o Google Analytics define cookies como _ga e _ga_*. A sua escolha fica registrada no armazenamento local do navegador (localStorage), sem envio a servidores. Mais detalhes na Política de Cookies. Você também pode bloquear ou apagar cookies nas configurações do navegador.",
  },
  {
    title: "5. Links para terceiros",
    body: "O site contém links para WhatsApp, Instagram, LinkedIn, GitHub e outros serviços. Ao acessá-los, valem as políticas de privacidade e os termos dessas plataformas, que a SAM não controla.",
  },
  {
    title: "6. Compartilhamento e transferência internacional",
    body: "Não vendemos dados nem os repassamos a terceiros por iniciativa própria. Os dados técnicos chegam à hospedagem e à infraestrutura de rede e, se você aceitar a medição, ao Google, que podem processá-los fora do Brasil, conforme suas próprias políticas e salvaguardas (art. 33 da LGPD). Também poderá haver compartilhamento por obrigação legal ou ordem judicial, ou para proteção dos direitos da SAM.",
  },
  {
    title: "7. Segurança",
    body: "Adotamos medidas técnicas e organizacionais razoáveis para proteger as informações contra acesso não autorizado, alteração, divulgação ou destruição indevida. Nenhum sistema conectado à internet, porém, garante segurança absoluta.",
  },
  {
    title: "8. Por quanto tempo",
    body: "O que fica no seu navegador permanece até você limpar os dados do site. Sua escolha sobre cookies é pedida novamente após 12 meses ou quando esta política mudar de forma relevante. As informações enviadas pelo WhatsApp são mantidas pelo tempo necessário para o atendimento e para cumprir obrigações legais. Os dados tratados por serviços de terceiros seguem a configuração e as políticas de cada um.",
  },
  {
    title: "9. Seus direitos (LGPD)",
    body: "Nos termos do art. 18 da Lei 13.709/2018, você pode pedir confirmação do tratamento, acesso, correção, anonimização, eliminação, portabilidade, informação sobre compartilhamento e revogação do consentimento. Escreva para contatosam.info@gmail.com; respondemos em até 15 dias. Para dados mantidos pelo Google ou por outros serviços, o pedido também deve ser feito diretamente a eles. Você pode ainda apresentar reclamação à ANPD (gov.br/anpd).",
  },
  {
    title: "10. Encarregado (DPO)",
    body: "Por ser um negócio de pequeno porte, o e-mail contatosam.info@gmail.com é o canal de comunicação do titular de dados.",
  },
  {
    title: "11. Alterações desta política",
    body: "Se houver mudança relevante, atualizaremos a data de revisão acima e, quando a mudança afetar cookies ou medição, pediremos a sua escolha novamente no banner.",
  },
];

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
              Última atualização: 17 de outubro de 2026
            </p>

            <div className="mt-8 space-y-8 text-base leading-relaxed text-text-secondary">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="font-heading text-xl font-semibold text-text-primary">
                    {section.title}
                  </h2>
                  <p className="mt-3">{section.body}</p>
                </section>
              ))}
            </div>
          </article>
        </Container>
      </main>

      <Footer />
    </>
  );
}

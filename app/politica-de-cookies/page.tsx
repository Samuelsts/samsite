import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Cookies | SAM Soluções Digitais",
  description:
    "Saiba quais cookies o site da SAM Soluções Digitais usa, para que servem e como controlá-los.",
};

export default function PoliticaCookies() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <Link
        href="/"
        className="text-sm font-semibold text-brand-blue transition-colors hover:text-brand-blue-light"
      >
        Voltar para o site
      </Link>

      <h1 className="mb-2 mt-6 text-4xl font-bold">Política de Cookies</h1>
      <p className="mb-8 text-sm text-slate-500">
        Última atualização: 17 de outubro de 2026
      </p>

      <h2 className="mb-2 text-xl font-semibold">O que são cookies</h2>
      <p className="mb-6">
        Cookies são pequenos arquivos que o site grava no seu navegador. Eles
        podem lembrar preferências ou ajudar a medir como o site é usado.
      </p>

      <h2 className="mb-2 text-xl font-semibold">Quais usamos</h2>
      <p className="mb-3">
        O site não cria cookies próprios para funcionar. Os únicos cookies são
        os do Google Analytics, que só são criados se você aceitar no banner:
      </p>
      <ul className="mb-6 list-disc space-y-2 pl-6">
        <li>
          <strong>_ga</strong>: identifica um visitante de forma anônima, para
          contar visitas e páginas vistas.
        </li>
        <li>
          <strong>_ga_*</strong>: mantém o estado da sessão de medição do Google
          Analytics.
        </li>
      </ul>
      <p className="mb-6">
        A duração desses cookies é definida pelo Google. Sua escolha sobre
        cookies fica registrada no armazenamento local do navegador
        (localStorage), que não é enviado a nenhum servidor.
      </p>

      <h2 className="mb-2 text-xl font-semibold">Como controlar</h2>
      <ul className="mb-6 list-disc space-y-2 pl-6">
        <li>
          Mude sua escolha a qualquer momento em &quot;Preferências de
          cookies&quot;, no rodapé do site. Ao recusar, apagamos os cookies do
          Google Analytics que o site consegue remover.
        </li>
        <li>Bloqueie ou apague cookies nas configurações do seu navegador.</li>
        <li>
          Se preferir, use o complemento de desativação do Google Analytics,
          disponível em tools.google.com/dlpage/gaoptout.
        </li>
      </ul>

      <p>
        Mais informações sobre o tratamento de dados estão na{" "}
        <Link
          href="/privacidade"
          className="font-semibold underline underline-offset-4"
        >
          Política de Privacidade
        </Link>
        .
      </p>
    </main>
  );
}

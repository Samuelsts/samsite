import Link from 'next/link';

export default function PoliticaCookies() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <Link
        href="/"
        className="text-sm font-semibold text-brand-blue transition-colors hover:text-brand-blue-light"
      >
        Voltar para o site
      </Link>
      <h1 className="mb-8 text-4xl font-bold">Política de Cookies</h1>

      <p className="mb-4">
        Este site utiliza cookies para melhorar a navegação e entender como os
        visitantes utilizam o conteúdo disponibilizado.
      </p>

      <p className="mb-4">
        Cookies são pequenos arquivos armazenados no navegador do usuário.
      </p>

      <p className="mb-4">
        Eles podem ser utilizados para fins estatísticos e para melhorar a
        experiência de navegação.
      </p>

      <p>
        Ao continuar utilizando este site, você concorda com a utilização desses
        cookies.
      </p>
    </main>
  );
}

# SAM Labs (samlabs.com.br)

Site institucional e de serviços de Samuel J. Santos (SAM Soluções Digitais): desenvolvimento web, automações e soluções digitais. Tem serviços, projetos, sobre e contato por WhatsApp e e-mail.

- Produção: https://www.samlabs.com.br (o domínio sem `www` redireciona para ele)
- Repositório: `Samuelsts/samsite` (deploy automático a cada push na `main`)
- Projeto irmão: [`help.samlabs.com.br`](https://help.samlabs.com.br), site de tutoriais em outro repositório

> Estado atual, decisões e pendências: [docs/ESTADO-DO-PROJETO.md](docs/ESTADO-DO-PROJETO.md)
> Orientações para assistentes de IA no repositório: [AGENTS.md](AGENTS.md) e [CLAUDE.md](CLAUDE.md). Esta versão do Next tem mudanças em relação ao que muitas IAs conhecem, e o `AGENTS.md` manda consultar o guia relevante em `node_modules/next/dist/docs/` antes de escrever código.

## Stack

- Next.js 16 (App Router) exportado como **site 100% estático** (`out/`), React 19, TypeScript
- Tailwind CSS 4, framer-motion, next-themes, lucide-react
- Google Analytics 4 via `@next/third-parties`, carregado **só depois do consentimento**
- Hospedagem: Cloudflare Pages. Sem banco de dados, sem login e sem API

## Rodar localmente

Precisa de Node 20 ou superior (o build na Cloudflare usa a versão do `.node-version`).

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # gera a pasta out/
npm run lint
```

## Estrutura

```
app/
  layout.tsx                 metadados, SEO, meta tag de verificação do AdSense, banner de cookies
  page.tsx                   página inicial (monta as seções)
  privacidade/ politica-de-cookies/ termos-de-uso/   textos legais
  sitemap.ts robots.ts not-found.tsx
components/
  sections/                  Hero, Services, Projects, About, Contact
  layout/                    Header, Footer
  legal/CookieBanner.tsx     consentimento e carregamento do Google Analytics
  ui/ providers/             componentes de base e tema
lib/consent.ts               leitura e gravação da escolha de cookies
public/
  _headers                   headers de segurança aplicados pela Cloudflare Pages
  ads.txt                    verificação do Google AdSense
  projects/                  imagens dos projetos (.webp)
docs/ESTADO-DO-PROJETO.md    onde paramos, decisões e pendências
```

## Onde editar o conteúdo

| O que mudar                                   | Arquivo                                                                                  |
| --------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Texto principal e botões da primeira tela     | `components/sections/Hero.tsx`                                                           |
| Lista de serviços                             | `components/sections/Services.tsx`                                                       |
| Projetos (título, descrição, imagem, link)    | `components/sections/Projects.tsx`                                                       |
| Texto "Sobre"                                 | `components/sections/About.tsx`                                                          |
| Contato (WhatsApp e e-mail)                   | `components/sections/Contact.tsx` e constantes no topo de `components/layout/Footer.tsx` |
| Título, descrição, imagem de compartilhamento | `metadata` em `app/layout.tsx` (imagem em `public/og-image.png`)                         |

### Adicionar um projeto

1. Salve a imagem em `public/projects/` (formato `.webp`, de preferência).
2. Acrescente um item ao array de `components/sections/Projects.tsx` com título, descrição, `image` e `href`.
3. **Use um `href` real.** Um `href: "#"` só leva ao topo da página e dá má impressão.
4. `npm run build`, commit e push.

## Consentimento e Google Analytics

- O Google Analytics **só carrega depois que a pessoa clica em Aceitar** no banner (`components/legal/CookieBanner.tsx`). Antes da escolha, e se ela recusar, nenhum script de medição é executado.
- A escolha fica em `localStorage` na chave `sam_consent` (formato `{ v, analytics, ts }`), com validade de 12 meses ou até `CONSENT_VERSION` mudar (`lib/consent.ts`).
- Ao recusar depois de ter aceitado, os cookies `_ga*` são apagados e a página recarrega.
- O link **Preferências de cookies** no rodapé reabre o banner (evento `open-consent`).
- **Aceitar e Recusar têm o mesmo peso visual.** Não induza a escolha.
- Para testar: janela anônima, DevTools, aba Network com filtro `collect`. Nada deve aparecer antes de clicar em Aceitar. Em Application, Cookies, não pode haver `_ga` antes do aceite.

## Google AdSense (somente verificação)

Este site **não exibe anúncios**. Ele serve apenas para o AdSense verificar o domínio raiz, que é o que o Google avalia e onde o `help.samlabs.com.br` exibirá anúncios:

- `public/ads.txt` com a linha do AdSense (`google.com, pub-..., DIRECT, f08c47fec0942fa0`);
- meta tag `google-adsense-account` em `metadata.other` de `app/layout.tsx`.

Não remova nenhum dos dois enquanto a conta do AdSense existir.

## Headers de segurança

Como o site é exportado como estático, `headers()` do `next.config.ts` não vale. Os headers (CSP, HSTS e outros) ficam em **`public/_headers`**, que a Cloudflare Pages aplica. Se acrescentar um script, fonte ou imagem de um domínio externo, **ajuste a CSP em `public/_headers`**, senão o navegador bloqueia.

## Deploy (Cloudflare Pages)

- Comando de build: `npm run build`. Diretório de saída: `out`.
- Cada push na `main` gera um deploy de produção.
- Para forçar um deploy novo: `git commit --allow-empty -m "chore: redeploy"` e `git push`. Evite "Retry deployment" em implantações antigas: ele reconstrói **aquele commit**, não o mais recente.
- Conferir os headers no ar:
  ```bash
  curl -sI "https://www.samlabs.com.br/?v=$(date +%s)" | grep -iE "content-security|strict-transport|x-frame"
  ```

## Textos legais

`/privacidade`, `/politica-de-cookies` e `/termos-de-uso` precisam descrever **exatamente** o que o site faz (ferramentas usadas, cookies, hospedagem). Mudou o comportamento (nova ferramenta, novo cookie, novo formulário)? Atualize os textos e a data de "Última atualização".

## Problemas comuns

| Sintoma                                              | O que fazer                                                     |
| ---------------------------------------------------- | --------------------------------------------------------------- |
| Botão de projeto leva ao topo da página              | O `href` do projeto está como `#`; coloque o link real          |
| Script externo bloqueado no navegador                | Libere o domínio na CSP em `public/_headers`                    |
| `Cannot find module '@/...'` no editor               | "TypeScript: Restart TS Server"; depois `npx tsc --noEmit`      |
| Deploy não pegou meu commit                          | Veja em Deployments qual commit está ativo; use um commit vazio |
| `package-lock.json` apareceu modificado sem eu mexer | `git restore package-lock.json` antes do commit                 |
| `git push` pede senha e trava                        | Autentique com `gh auth login`                                  |

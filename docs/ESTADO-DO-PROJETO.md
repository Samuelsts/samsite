# Estado do projeto e guia de continuidade (samlabs.com.br)

Documento para quem for **continuar o trabalho** (uma pessoa ou outra IA): onde paramos, o que foi decidido e por quê, o que falta e o que não pode ser quebrado. Para o "como fazer", veja o [README](../README.md).

> **Mantenha este arquivo atualizado.** Ao fim de cada sessão de trabalho, atualize "Onde paramos" e acrescente uma linha ao "Histórico". Não coloque dados pessoais (CPF, endereço, telefone, contas bancárias) nem segredos aqui.

Última atualização: 24/10/2026

## 1. Resumo

- `www.samlabs.com.br` é o site de serviços do mantenedor (Samuel J. Santos, sob o nome SAM Soluções Digitais): serviços, projetos, sobre e contato por WhatsApp e e-mail.
- É o **domínio raiz** que o Google AdSense avalia. O site **não exibe anúncios**; quem exibirá é o `help.samlabs.com.br` (outro repositório). Este site só serve a verificação do AdSense (`public/ads.txt` e meta tag).
- É um site estático (`output: 'export'`) na Cloudflare Pages, com headers de segurança em `public/_headers`.
- O mantenedor considera o conteúdo do site ainda **genérico** e pretende melhorá-lo. Isso importa também para a análise do AdSense, porque o Google avalia o domínio raiz.

## 2. Onde paramos

| Item                                                                                                 | Situação                                                |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| Site no ar em `www.samlabs.com.br`, com `samlabs.com.br` redirecionando para o `www`                 | Feito                                                   |
| Export estático na Cloudflare Pages, headers em `public/_headers`                                    | Feito                                                   |
| Banner de consentimento: Google Analytics só carrega após aceite, Recusar e Aceitar com o mesmo peso | Feito                                                   |
| Link "Preferências de cookies" no rodapé para revogar                                                | Feito                                                   |
| Políticas (`/privacidade`, `/politica-de-cookies`, `/termos-de-uso`) alinhadas ao comportamento real | Feito (Web Analytics da Cloudflare removido dos textos) |
| Verificação do AdSense: `public/ads.txt` e meta tag `google-adsense-account`                         | Feito                                                   |
| Cloudflare Web Analytics                                                                             | Desligado                                               |
| `.gitattributes` e normalização de fim de linha                                                      | Feito                                                   |
| **Análise do AdSense do domínio raiz**                                                               | **Em andamento**, aguardando resultado                  |
| Botão "Ver detalhes" do projeto "Painel de Gastos" (estava com `href: "#"`)                          | **A confirmar** se foi resolvido                        |
| Limpeza do rodapé: constante `EMAIL` de exemplo e import `Mail` sem uso em `Footer.tsx`              | **A confirmar**                                         |
| Alinhar versões: `@next/third-parties ^16.3.4` com `next 16.2.6`                                     | **Pendente** (baixo risco)                              |
| Melhorar o conteúdo (serviços, projetos, textos de venda)                                            | **Pendente**, decisão do mantenedor                     |
| Controlador na Política: se houver CNPJ ou MEI, trocar para a empresa                                | **Pendente**                                            |
| Search Console (propriedade de domínio por TXT no Cloudflare e sitemaps)                             | **A confirmar**                                         |

## 3. Próximos passos

1. **Aguardar o AdSense** (Sites, coluna "Status de aprovação"; o resultado vem por e-mail). Se vier "Requer atenção", copie o motivo exato de "Detalhes do status" e corrija só o que ele aponta.
2. **Melhorar o conteúdo do site** com texto próprio e específico (o que a SAM faz, para quem, exemplos de projetos reais). Site "em construção" ou muito genérico pesa contra na avaliação.
3. Resolver os itens "A confirmar" e "Pendente" da tabela.
4. Depois da aprovação do AdSense, nada muda aqui: o `ads.txt` e a meta tag continuam, e os anúncios ficam só no `help.`.

## 4. Decisões tomadas e por quê

1. **Export estático e headers em `public/_headers`.** `headers()` do `next.config.ts` é ignorado em `output: 'export'`, e a Cloudflare Pages aplica o `_headers`. `images.unoptimized` porque o otimizador do `next/image` exige servidor (os assets já são `.webp` e `.svg` locais).
2. **Cloudflare Pages em vez da Vercel Hobby.** A Vercel Hobby é para uso não comercial; este site promove serviços, o que conta como comercial.
3. **Google Analytics só após o aceite.** Antes estava carregando sempre, antes de qualquer clique. Consentimento livre, com Recusar e Aceitar visualmente iguais e sem bloquear o conteúdo por recusa.
4. **Sem anúncios neste site.** O raiz serve ao AdSense apenas como domínio verificado. Anúncios ficam no `help.` (decisão do mantenedor).
5. **`ads.txt` e meta tag no raiz.** O formulário do AdSense só aceita o domínio raiz, e os subdomínios entram junto. A verificação por meta tag e `ads.txt` não depende do consentimento (não são anúncios).
6. **Canonical em `www`.** `metadataBase` e `canonical` apontam para `https://www.samlabs.com.br`, e o domínio sem `www` redireciona (308).
7. **Cloudflare Web Analytics desativado.** Ficou apenas o Google Analytics, com consentimento. Os textos legais descrevem só isso.

## 5. Regras que não podem ser quebradas

- Nenhum script de terceiros (analytics, pixels, widgets) carrega **antes** do consentimento.
- Recusar e Aceitar sempre com o mesmo peso. Nunca bloquear conteúdo por recusa.
- Mudou o comportamento do site? **Atualize os textos legais** e a data de "Última atualização".
- Não remover `public/ads.txt` nem a meta tag `google-adsense-account` enquanto a conta do AdSense existir.
- Script ou domínio externo novo exige ajuste da CSP em `public/_headers`.
- Não deixar `href: "#"` em botões. Link quebrado ou vazio prejudica a avaliação do site.
- Não afirmar no site serviços, clientes ou resultados que não existem.
- Não usar a Vercel Hobby para este site.

## 6. Mapa de arquivos importantes

| Arquivo                                                   | Para que serve                                                                                                                                                                                                         |
| --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `app/layout.tsx`                                          | Metadados, SEO, meta tag do AdSense, montagem do banner                                                                                                                                                                |
| `components/legal/CookieBanner.tsx`                       | Banner de consentimento e carregamento do Google Analytics                                                                                                                                                             |
| `lib/consent.ts`                                          | Leitura e gravação da escolha (`sam_consent`)                                                                                                                                                                          |
| `components/layout/Footer.tsx`                            | Rodapé, links legais, botão "Preferências de cookies", constantes de contato                                                                                                                                           |
| `components/sections/*.tsx`                               | Conteúdo das seções da home                                                                                                                                                                                            |
| `public/_headers`                                         | CSP, HSTS e demais headers                                                                                                                                                                                             |
| `public/ads.txt`                                          | Verificação do AdSense                                                                                                                                                                                                 |
| `app/privacidade`, `politica-de-cookies`, `termos-de-uso` | Textos legais                                                                                                                                                                                                          |
| `app/sitemap.ts`, `app/robots.ts`                         | SEO                                                                                                                                                                                                                    |
| `AGENTS.md`                                               | Regra do template do Next 16: esta versão tem mudanças de APIs e convenções, e o assistente deve **ler o guia relevante em `node_modules/next/dist/docs/` antes de escrever código** e respeitar avisos de depreciação |
| `CLAUDE.md`                                               | Só importa o `AGENTS.md` (`@AGENTS.md`)                                                                                                                                                                                |

## 7. Armadilhas conhecidas

- **"Retry deployment" na Cloudflare reconstrói aquele commit antigo**, não o mais recente. Para um deploy novo: `git commit --allow-empty -m "chore: redeploy"` e `git push`.
- `package-lock.json` costuma aparecer modificado sem motivo: `git restore package-lock.json` antes do commit.
- Erros "Cannot find module '@/...'" no VS Code geralmente são cache: "TypeScript: Restart TS Server".
- O `git push` pelo terminal do VS Code (snap) pode falhar com `askpass.sh`: usar `gh auth login` e um terminal novo.
- O caminho local do projeto mudou: confirme com `pwd` antes de rodar comandos.
- `@next/third-parties` está em `^16.3.4` e o Next em `16.2.6`. Funciona, mas vale alinhar as versões numa atualização.

## 8. Projeto irmão: help.samlabs.com.br

- Site de tutoriais em vídeo do sistema Clinic All, em outro repositório (`Samuelsts/helpsam`), na Cloudflare Pages. **É onde os anúncios do AdSense serão exibidos**, após o aceite no banner de lá.
- O Portal de Tutoriais aparece na lista de projetos deste site (`components/sections/Projects.tsx`) e deve apontar para `https://help.samlabs.com.br`.
- Por transparência, o mantenedor deve avisar a empresa dona do sistema de que o `help.` tem um link para este site de serviços.
- O estado detalhado do `help.` está no `docs/ESTADO-DO-PROJETO.md` daquele repositório.

## 9. Comandos úteis de verificação

```bash
# Headers no ar
curl -sI "https://www.samlabs.com.br/?v=$(date +%s)" | grep -iE "content-security|strict-transport|x-frame"

# ads.txt (www direto e domínio sem www com redirecionamento)
curl -s https://www.samlabs.com.br/ads.txt
curl -sIL https://samlabs.com.br/ads.txt | grep -iE "^HTTP|location"

# Meta tag de verificação do AdSense
curl -s https://www.samlabs.com.br | grep -o 'google-adsense-account[^>]*' | head -1

# Nada da Cloudflare Analytics sendo injetado (deve imprimir 0)
curl -s https://www.samlabs.com.br/ | grep -c cloudflareinsights
```

Teste do banner em janela anônima: Network com filtro `collect` **vazio** antes da escolha; sem cookies `_ga` antes do aceite; depois de Aceitar aparecem a requisição `collect` e os cookies; depois de Recusar pelo rodapé, a página recarrega e os `_ga` somem.

## 10. Histórico resumido

- Primeira versão do site (Next.js), com metadados, SEO e imagem de compartilhamento.
- Ajustes na política de segurança e no OpenGraph.
- Google Analytics adicionado.
- Auditoria: Analytics carregava sem consentimento. Banner novo (Recusar e Aceitar), políticas reescritas.
- `ads.txt` e meta tag do AdSense publicados, e o link do Portal de Tutoriais corrigido.
- Normalização de fim de linha (`.gitattributes`).
- Migração para export estático e `public/_headers` na Cloudflare Pages.
- Referência ao Cloudflare Web Analytics removida da Política de Privacidade.
- Análise do AdSense em andamento.

## 11. Prompt para retomar o trabalho com uma IA

Copie, cole na nova conversa e anexe o README e este arquivo:

```text
Vou continuar um projeto já em andamento (site institucional em Next.js, estático, na Cloudflare Pages). Leia com atenção o README.md e docs/ESTADO-DO-PROJETO.md (anexados) antes de responder.

Regras: siga o AGENTS.md do repositório (esta versão do Next tem mudanças em relação ao que você conhece: consulte o guia relevante em node_modules/next/dist/docs/ antes de escrever código do Next e me peça a saída de `ls node_modules/next/dist/docs` se precisar); respeite a seção "Regras que não podem ser quebradas"; não refaça decisões da seção "Decisões tomadas" sem me explicar o motivo; peça para eu colar a saída de comandos em vez de presumir resultados; ao mexer em scripts de terceiros, atualize também a CSP em public/_headers e os textos legais.

Resuma em poucas linhas o estado do projeto e o que falta, e depois me pergunte qual é o status atual da análise do AdSense e quais itens "A confirmar" já foram resolvidos.

Tom: colega sênior, direto e técnico, sem explicar o básico de redes e Linux. Responda em português do Brasil.
```

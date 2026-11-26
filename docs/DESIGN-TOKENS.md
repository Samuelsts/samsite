# Tokens de cor e preparação para tema claro/escuro

Decisão: o site tem hero/rodapé sempre escuros e páginas internas claras. O tema
automático (segue o navegador) será ligado depois; o código já nasce preparado.

## Regras
1. Componentes **nunca** usam cor direta (`bg-white`, `text-slate-950`, `#hex`).
   Só tokens: `bg-surface`, `bg-surface-alt`, `border-border`, `text-text-primary`,
   `text-text-secondary`, `text-text-muted`, `text-accent-text`.
2. Botões/fundos azuis usam `brand-blue`. **Texto azul** usa `accent-text`
   (#2563EB no claro; #60A5FA no escuro, porque #2563EB sobre fundo escuro dá ~3,7:1).
3. Verde (`brand-emerald`) só como indicador, nunca texto sobre branco (~2,5:1).
4. Seção sempre escura: `data-surface="inverse"` no elemento.
5. Logo: componente `Logo` (letras em `currentColor`, "A" fixo em #2563EB).
6. Capturas de projetos ficam em moldura com `border-border`.

## Como ligar o tema automático
Ver comentário em `components/providers/ThemeProvider.tsx` (remover `forcedTheme`).
Atualizar também a Política de Cookies/Privacidade (preferência em localStorage).

## Pendências
- Alinhar `--surface` do escopo escuro ao fundo exato do hero atual.
- Trocar as utilitárias `slate-*`/`gray-*`/`bg-white` existentes por tokens
  (116 ocorrências em 19/11/2026: `grep -rnE "slate-|zinc-|gray-|bg-white|text-\[#|bg-\[#" components app`).
- Canonical e og:url por página (não definir no layout raiz).

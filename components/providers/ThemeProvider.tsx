"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * Tema TRAVADO em claro (as seções "sempre escuras" usam data-surface="inverse"
 * e não dependem disto).
 *
 * Para ligar o tema automático (segue o navegador do usuário):
 *   1. remover a linha `forcedTheme="light"`;
 *   2. testar todas as páginas em modo escuro;
 *   3. adicionar uma linha sobre a preferência de tema (localStorage) em
 *      /politica-de-cookies e /privacidade e atualizar a data.
 * Detalhes em docs/DESIGN-TOKENS.md.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      forcedTheme="light"
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}

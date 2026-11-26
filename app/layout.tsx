import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import CookieBanner from "@/components/legal/CookieBanner";

// O manual da marca define só Inter (Semibold e Regular).
// A fonte variável cobre todos os pesos em um único arquivo.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.samlabs.com.br"),
  other: {
    "google-adsense-account": "ca-pub-1843339673139409",
  },

  title: {
    default:
      "SAM Soluções Digitais | Automação de processos e ferramentas sob medida",
    template: "%s | SAM Soluções Digitais",
  },

  description:
    "Diagnóstico de processos e ferramentas digitais sob medida para pequenas empresas e profissionais: automações, planilhas inteligentes e pequenos sistemas.",

  authors: [{ name: "Samuel J. Santos" }],
  creator: "Samuel J. Santos",

  // ATENÇÃO: não definir `alternates.canonical` nem `openGraph.url` aqui.
  // Esses campos são herdados pelas páginas filhas; um valor global fazia
  // TODAS as páginas apontarem para a home. Cada página define o seu
  // (ex.: alternates: { canonical: "/privacidade" }, openGraph: { url: "/privacidade" }).
  openGraph: {
    title: "SAM Soluções Digitais",
    description:
      "Automação de processos e ferramentas digitais sob medida para pequenas empresas e profissionais.",
    siteName: "SAM Soluções Digitais",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://www.samlabs.com.br/og-image.png",
        width: 1200,
        height: 630,
        alt: "SAM Soluções Digitais",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SAM Soluções Digitais",
    description: "Automação de processos e ferramentas digitais sob medida.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: [
      {
        url: "/favicon_io/favicon.ico",
      },
      {
        url: "/favicon_io/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon_io/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/favicon_io/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
        <CookieBanner />
      </body>
    </html>
  );
}

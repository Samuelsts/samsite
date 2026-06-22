import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import CookieBanner from "@/components/legal/CookieBanner";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.samlabs.com.br"),

  title: {
    default: "SAM Labs | Desenvolvimento Web e Soluções Digitais",
    template: "%s | SAM Labs",
  },

  description:
    "Desenvolvimento de sites, landing pages, automações, dashboards e soluções digitais para empresas e profissionais.",

  keywords: [
    "desenvolvimento web",
    "sites profissionais",
    "landing page",
    "automação",
    "dashboard",
    "nextjs",
    "react",
    "sistemas web",
    "SAM Labs",
    "Soluções Digitais"
  ],

  authors: [
    {
      name: "Samuel",
    },
  ],

  creator: "Samuel",

  alternates: {
    canonical: "https://www.samlabs.com.br",
  },

  openGraph: {
    title: "SAM Labs | Desenvolvimento Web e Soluções Digitais",
    description:
      "Sites, landing pages, automações e soluções digitais para empresas e profissionais.",

    url: "https://www.samlabs.com.br",

    siteName: "SAM Labs",

    locale: "pt_BR",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SAM Labs",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SAM Labs",
    description:
      "Desenvolvimento Web, Automações e Soluções Digitais.",
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
      <body className={`${inter.variable} ${jakarta.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
        <CookieBanner />
      </body>
    </html>
  );
}

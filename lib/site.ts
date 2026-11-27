/**
 * Dados do site em UM lugar só (contato, navegação, redes).
 * Trocar número, e-mail ou links = editar este arquivo.
 */
export const SITE = {
  name: "SAM Soluções Digitais",
  tagline: "Tecnologia aplicada ao crescimento do seu negócio.",
  url: "https://www.samlabs.com.br",
  whatsappNumber: "5575998455810",
  /**
   * Deixe `null` até existir um e-mail real.
   * Com `null`, os botões/links de e-mail não aparecem no site.
   */
  email: "contatosam.info@gmail.com" as string | null,
};

const DEFAULT_WHATSAPP_MESSAGE =
  "Olá! Vim pelo site da SAM e gostaria de conversar sobre uma solução digital.";

export function whatsappUrl(message: string = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Menu principal. Enquanto as páginas internas não existem, aponta para
 * as seções da home (com "/" na frente para funcionar a partir de qualquer página).
 * Ao criar cada página, trocar o href (ex.: "/#servicos" -> "/servicos").
 */
export const NAV_LINKS = [
  { label: "Serviços", href: "/#servicos" },
  { label: "Projetos", href: "/#projetos" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Contato", href: "/#contato" },
];

export const LEGAL_LINKS = [
  { label: "Política de Privacidade", href: "/privacidade" },
  { label: "Política de Cookies", href: "/politica-de-cookies" },
  { label: "Termos de Uso", href: "/termos-de-uso" },
];

export const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://instagram.com/samlabs.br",
    icon: "/icons/social/instagram.svg",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/sjesussantos",
    icon: "/icons/social/linkedin.svg",
  },
  {
    label: "GitHub",
    href: "https://github.com/Samuelsts",
    icon: "/icons/social/github.svg",
  },
];

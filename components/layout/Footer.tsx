import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { CookiePrefsButton } from "@/components/layout/CookiePrefsButton";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import {
  LEGAL_LINKS,
  NAV_LINKS,
  SITE,
  SOCIAL_LINKS,
  whatsappUrl,
} from "@/lib/site";

const headingClass =
  "text-xs font-semibold uppercase tracking-[0.18em] text-text-muted";
const linkClass =
  "text-sm font-medium text-text-secondary transition-colors hover:text-text-primary";

// Server Component: sem JS extra no cliente (o único botão interativo é o
// CookiePrefsButton). Sem animação de entrada/blur.
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer data-surface="inverse">
      <Container>
        <div className="border-t border-border py-16 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            {/* Marca e proposta */}
            <div>
              <Link
                href="/"
                className="inline-flex items-center"
                aria-label="SAM Soluções Digitais — página inicial"
              >
                <Logo decorative className="h-5 md:h-6" />
              </Link>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-text-muted">
                {SITE.tagline} Soluções digitais práticas para organizar
                processos, automatizar rotinas e transformar ideias em
                ferramentas úteis.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={whatsappUrl()} variant="inverse" size="sm">
                  <MessageCircle size={16} />
                  Falar no WhatsApp
                </ButtonLink>

                {/* Só aparece quando SITE.email tiver um endereço real */}
                {SITE.email && (
                  <ButtonLink
                    href={`mailto:${SITE.email}`}
                    variant="ghost"
                    size="sm"
                  >
                    <Mail size={16} />
                    Enviar e-mail
                  </ButtonLink>
                )}
              </div>
            </div>

            {/* Navegação, redes e legal */}
            <div className="grid gap-10 sm:grid-cols-3 lg:grid-cols-2">
              <div>
                <h3 className={headingClass}>Navegação</h3>
                <nav className="mt-5 grid gap-3" aria-label="Rodapé">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`group inline-flex w-fit items-center gap-2 ${linkClass}`}
                    >
                      {link.label}
                      <ArrowUpRight
                        size={14}
                        className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </Link>
                  ))}
                </nav>
              </div>

              <div>
                <h3 className={headingClass}>Redes</h3>
                <div className="mt-5 grid gap-3">
                  {SOCIAL_LINKS.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex w-fit items-center gap-3 ${linkClass}`}
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface-alt transition-colors duration-300 group-hover:border-border-strong">
                        {/* Ícones são pretos; "invert" os deixa claros (rodapé é sempre escuro) */}
                        <Image
                          src={social.icon}
                          alt=""
                          aria-hidden="true"
                          width={16}
                          height={16}
                          className="h-4 w-4 object-contain opacity-70 invert transition-opacity duration-300 group-hover:opacity-100"
                        />
                      </span>
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className={headingClass}>Legal</h3>
                <div className="mt-5 grid gap-3">
                  {LEGAL_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={linkClass}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <CookiePrefsButton
                    className={`w-fit text-left ${linkClass}`}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Linha inferior */}
          <div className="mt-14 flex flex-col gap-2 border-t border-border pt-6 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {currentYear} {SITE.name}. Todos os direitos reservados.
            </p>
            <p>Feito com foco em clareza, performance e tecnologia útil.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

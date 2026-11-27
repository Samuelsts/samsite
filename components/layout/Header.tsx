"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUp, Menu, X } from "lucide-react";

import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { NAV_LINKS, whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 220);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fecha o menu com Esc (acessibilidade).
  useEffect(() => {
    if (!menuOpen) return;

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const scrollToTop = () => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* data-surface="inverse": cabeçalho sempre escuro, em qualquer tema */}
      <header
        data-surface="inverse"
        className="sticky top-0 z-[999] border-b border-border"
      >
        <Container className="flex h-16 items-center justify-between gap-6">
          <Link
            href="/"
            onClick={closeMenu}
            className="flex shrink-0 items-center"
            aria-label="SAM Soluções Digitais — página inicial"
          >
            <Logo decorative className="h-5 md:h-6" />
          </Link>

          {/* Navegação desktop */}
          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Navegação principal"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ButtonLink
              href={whatsappUrl()}
              variant="inverse"
              size="sm"
              pill
              className="hidden md:inline-flex"
            >
              Falar no WhatsApp
            </ButtonLink>

            {/* Botão hambúrguer (mobile) */}
            <button
              type="button"
              className="flex items-center justify-center rounded-lg p-2 text-text-secondary transition-colors hover:bg-surface-alt hover:text-text-primary md:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </Container>

        {/* Menu mobile (drawer) */}
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
          className={cn(
            "fixed inset-x-0 bottom-0 top-16 z-[998] flex flex-col overflow-y-auto overflow-x-hidden border-t border-border bg-surface px-6 py-8 md:hidden",
            "transition-all duration-300 ease-out",
            menuOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible pointer-events-none -translate-y-2 opacity-0",
          )}
        >
          <nav className="flex flex-col gap-1" aria-label="Navegação mobile">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-base font-medium text-text-secondary transition-colors hover:bg-surface-alt hover:text-text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-8">
            <ButtonLink
              href={whatsappUrl()}
              variant="whatsapp"
              size="lg"
              className="w-full"
              onClick={closeMenu}
            >
              Falar no WhatsApp
            </ButtonLink>
          </div>
        </div>
      </header>

      {/* Botão "voltar ao topo": sempre escuro, flutua sobre qualquer fundo */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Voltar ao topo"
        data-surface="inverse"
        className={cn(
          "fixed bottom-5 right-5 z-50 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-border-strong text-text-primary shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:text-accent-text hover:shadow-[0_16px_45px_rgba(37,99,235,0.25)]",
          showBackToTop && !menuOpen
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-4 scale-95 opacity-0",
        )}
      >
        <ArrowUp size={18} />
      </button>
    </>
  );
}

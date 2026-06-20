'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ArrowUp, Menu, X } from 'lucide-react';

import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

const WHATSAPP_NUMBER = '5575998455810'; // ← substitua pelo seu número
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Olá! Vim pelo site e gostaria de conversar.',
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 220);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const scrollToTop = () => {
    setMenuOpen(false);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[999] border-b border-white/10 bg-slate-950 md:relative">
        <Container className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={closeMenu}
            className="sam-animate-fade-down sam-delay-200 flex max-w-[88px] shrink-0 items-center overflow-hidden md:max-w-[104px]"
            aria-label="SAM Soluções Digitais — voltar ao topo"
          >
            <Image
              src="/logofinalbranco.svg"
              alt="SAM Soluções Digitais"
              width={104}
              height={32}
              priority
              className="h-5 w-auto object-contain md:h-6"
            />
          </a>

          {/* Nav — desktop */}
          <nav
            className="sam-animate-fade-down sam-delay-200 hidden items-center gap-8 md:flex"
            aria-label="Navegação principal"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Toggle mobile */}
          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="sam-animate-fade-down sam-delay-500 hidden items-center rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-slate-300 transition-all hover:border-white/20 hover:bg-white/5 hover:text-white md:inline-flex"
            >
              Falar no WhatsApp
            </a>

            {/* Botão hamburguer — mobile */}
            <button
              type="button"
              className="flex items-center justify-center rounded-lg p-2 text-slate-300 transition-colors hover:bg-white/10 hover:text-white md:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </Container>

        {/* Menu mobile — drawer */}
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
          className={cn(
            'fixed left-0 right-0 top-16 bottom-0 z-[998] flex flex-col overflow-y-auto overflow-x-hidden border-t border-white/10 bg-slate-950 px-6 py-8 md:hidden',
            'transition-all duration-300 ease-out',
            menuOpen
              ? 'visible translate-y-0 opacity-100'
              : 'invisible pointer-events-none -translate-y-2 opacity-0',
          )}
        >
          <nav className="flex flex-col gap-1" aria-label="Navegação mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-base font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-8">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              <Button variant="whatsapp" size="lg" className="w-full">
                Falar no WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </header>

      <div aria-hidden="true" className="h-16 md:hidden" />

      {/* Botão animado voltar ao topo */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Voltar ao topo"
        className={cn(
          'fixed bottom-5 right-5 z-50 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-slate-400/60 text-white shadow-sm backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:border-blue-400/40 hover:bg-slate-900 hover:text-blue-300 hover:shadow-[0_16px_45px_rgba(37,99,235,0.25)]',
          showBackToTop && !menuOpen
            ? 'pointer-events-auto translate-y-0 scale-100 opacity-100'
            : 'pointer-events-none translate-y-4 scale-95 opacity-0',
        )}
      >
        <ArrowUp size={18} />
      </button>
    </>
  );
}

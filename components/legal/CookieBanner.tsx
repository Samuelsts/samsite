'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const COOKIE_KEY = 'cookie-consent';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShowBanner(!localStorage.getItem(COOKIE_KEY));
  }, []);

  function acceptCookies() {
    localStorage.setItem(COOKIE_KEY, 'accepted');
    setShowBanner(false);
  }

  if (!showBanner) return null;

  return (
    <div
      className="
        fixed bottom-0 left-0 right-0 z-50
        border-t border-border
        bg-white/95
        backdrop-blur
        shadow-lg
      "
    >
      <div
        className="
          container mx-auto
          flex flex-col gap-4
          px-4 py-4
          md:flex-row md:items-center md:justify-between
        "
      >
        <p className="text-sm text-muted-foreground">
          Utilizamos cookies para melhorar sua experiência de navegação. Ao
          continuar utilizando este site, você concorda com nossa{' '}
          <Link
            href="/privacidade"
            className="font-medium underline underline-offset-4"
          >
            Política de Privacidade
          </Link>{' '}
          e{' '}
          <Link
            href="/politica-de-cookies"
            className="font-medium underline underline-offset-4"
          >
            Política de Cookies
          </Link>
          .
        </p>

        <button
          onClick={acceptCookies}
          className="
            shrink-0 rounded-lg
            px-4 py-2
            text-sm font-medium
            transition-opacity
            hover:opacity-90
            bg-black
            text-white cursor-pointer
          "
        >
          Aceitar
        </button>
      </div>
    </div>
  );
}

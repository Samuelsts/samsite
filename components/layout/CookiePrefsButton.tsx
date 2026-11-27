"use client";

/**
 * Reabre o banner de consentimento (o CookieBanner escuta o evento "open-consent").
 * Isolado em um componente próprio para o Footer poder ser Server Component.
 */
export function CookiePrefsButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("open-consent"))}
      className={className}
    >
      Preferências de cookies
    </button>
  );
}

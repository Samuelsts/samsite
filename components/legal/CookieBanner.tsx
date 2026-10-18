"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { GoogleAnalytics } from "@next/third-parties/google";

import { readConsent, saveConsent } from "@/lib/consent";

const GA_ID = "G-9BZGTDSKLY";

function clearAnalyticsCookies() {
  // .samlabs.com.br (funciona para domínios .com.br; ajuste se mudar de TLD)
  const root = "." + location.hostname.split(".").slice(-3).join(".");
  const names = document.cookie
    .split(";")
    .map((c) => c.split("=")[0].trim())
    .filter((n) => n === "_ga" || n.startsWith("_ga_"));

  for (const name of names) {
    for (const domain of [location.hostname, "." + location.hostname, root]) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${domain}`;
    }
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  }
}

const choiceClass =
  "inline-flex min-h-10 flex-1 items-center justify-center rounded-lg border border-slate-900 bg-white px-4 py-2 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-900 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 cursor-pointer md:flex-none";

export default function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect */
    const consent = readConsent();
    if (!consent) setOpen(true);
    else setAnalytics(consent.analytics);
    /* eslint-enable react-hooks/set-state-in-effect */

    const reopen = () => setOpen(true);
    window.addEventListener("open-consent", reopen);
    return () => window.removeEventListener("open-consent", reopen);
  }, []);

  function choose(accepted: boolean) {
    saveConsent(accepted);
    setOpen(false);

    if (accepted) {
      setAnalytics(true);
      return;
    }

    setAnalytics(false);
    clearAnalyticsCookies();
    // um script já carregado não pode ser "descarregado": recarrega a página
    if (document.querySelector('script[src*="googletagmanager.com/gtag/js"]')) {
      window.location.reload();
    }
  }

  return (
    <>
      {analytics && <GoogleAnalytics gaId={GA_ID} />}

      {open && (
        <div
          role="dialog"
          aria-labelledby="cookie-title"
          aria-describedby="cookie-desc"
          className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-white/95 shadow-lg backdrop-blur"
        >
          <div className="container mx-auto flex flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2
                id="cookie-title"
                className="text-sm font-semibold text-slate-900"
              >
                Cookies e medição de audiência
              </h2>
              <p
                id="cookie-desc"
                className="mt-1 text-sm text-muted-foreground"
              >
                Usamos o Google Analytics para entender como o site é usado, o
                que envolve cookies. Só ativamos se você aceitar, e você pode
                mudar de ideia quando quiser. Veja a{" "}
                <Link
                  href="/privacidade"
                  className="font-medium underline underline-offset-4"
                >
                  Política de Privacidade
                </Link>{" "}
                e a{" "}
                <Link
                  href="/politica-de-cookies"
                  className="font-medium underline underline-offset-4"
                >
                  Política de Cookies
                </Link>
                .
              </p>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => choose(false)}
                className={choiceClass}
              >
                Recusar
              </button>
              <button
                type="button"
                onClick={() => choose(true)}
                className={choiceClass}
              >
                Aceitar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

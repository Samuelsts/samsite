import Link from "next/link";

import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "whatsapp" | "inverse";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-brand-blue text-white shadow-btn-primary hover:bg-brand-blue/90",
  ghost:
    "border border-border bg-transparent text-text-primary hover:border-border-strong hover:bg-surface-alt",
  // Texto grafite: branco sobre #10B981 dá ~2,5:1 (reprova); grafite dá ~6,6:1.
  whatsapp:
    "bg-brand-emerald text-brand-graphite shadow-btn-whatsapp hover:bg-brand-emerald/90",
  // Pílula clara em fundo escuro (e escura em fundo claro): troca com o tema.
  inverse: "bg-text-primary text-surface hover:bg-text-primary/90",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

type StyleOptions = {
  variant?: Variant;
  size?: Size;
  /** Formato pílula (rounded-full). Padrão: cantos do manual (rounded-btn). */
  pill?: boolean;
  className?: string;
};

export function buttonClasses({
  variant = "primary",
  size = "md",
  pill = false,
  className,
}: StyleOptions = {}) {
  return cn(
    "inline-flex cursor-pointer items-center justify-center gap-2 font-semibold",
    pill ? "rounded-full" : "rounded-btn",
    "transition-all duration-150",
    "active:scale-95 disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  );
}

interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    Omit<StyleOptions, "className"> {
  children: React.ReactNode;
}

export function Button({
  variant,
  size,
  pill,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonClasses({ variant, size, pill, className })}
      {...props}
    >
      {children}
    </button>
  );
}

type ButtonLinkProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
> &
  StyleOptions & { href: string; children: React.ReactNode };

/**
 * Link com aparência de botão (use no lugar de <a><Button/></a>,
 * que é HTML inválido: elemento interativo dentro de outro).
 * - "/..."        -> next/link (navegação interna)
 * - "http(s)://"  -> abre em nova aba, com rel seguro
 * - mailto:/tel:  -> link simples
 */
export function ButtonLink({
  href,
  variant,
  size,
  pill,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  const classes = buttonClasses({ variant, size, pill, className });

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (/^https?:/.test(href)) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <a href={href} className={classes} {...props}>
      {children}
    </a>
  );
}

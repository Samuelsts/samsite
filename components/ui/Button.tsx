import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "whatsapp";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const variants = {
  primary:
    "bg-brand-blue text-white shadow-[--shadow-btn-primary] hover:bg-blue-700 focus-visible:ring-blue-600",
  ghost:
    "border border-[--color-border] bg-transparent text-[--color-text-primary] hover:border-[--color-border-strong] hover:bg-[--color-surface-alt]",
  whatsapp:
    "bg-brand-emerald text-white shadow-[--shadow-btn-whatsapp] hover:bg-emerald-600 rounded-md focus-visible:ring-emerald-500",
};

const sizes = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        // Base
        "inline-flex cursor-pointer items-center justify-center gap-2 rounded-[--radius-btn] font-semibold",
        "transition-all duration-150",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "active:scale-95 disabled:pointer-events-none disabled:opacity-50",
        // Variante e tamanho
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
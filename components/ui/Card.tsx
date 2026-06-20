import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[--radius-card] border border-[--color-border] bg-[--color-surface]",
        "shadow-[--shadow-card]",
        hover && [
          "transition-all duration-200",
          "hover:border-blue-200 hover:shadow-[--shadow-card-hover]",
          "dark:hover:border-blue-800",
        ],
        className
      )}
    >
      {children}
    </div>
  );
}
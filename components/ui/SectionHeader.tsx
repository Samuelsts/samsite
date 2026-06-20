import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  tag?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  tag,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        align === "left" && "items-start text-left",
        className
      )}
    >
      {tag && (
        <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-400">
          {tag}
        </span>
      )}

      <h2 className="font-heading text-3xl font-bold tracking-tight text-[--color-text-primary] md:text-4xl">
        {title}
      </h2>

      {subtitle && (
        <p className="max-w-xl text-base text-[--color-text-secondary]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
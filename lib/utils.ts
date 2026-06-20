import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina classes condicionais (clsx) e resolve
 * conflitos de classes Tailwind (tailwind-merge).
 *
 * Exemplo:
 *   cn("p-4", condition && "p-8")  → "p-8" se condition=true
 *   cn("p-4 text-sm", "text-lg")  → "p-4 text-lg"
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
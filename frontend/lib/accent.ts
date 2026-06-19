import type { Accent } from "@/lib/content";

/**
 * Maps an accent token (sky / mint / pink) to design-layer class names.
 * Centralized so pages stay free of raw color references.
 */
export const accentBadge: Record<Accent, string> = {
  sky: "bg-brand-100 text-brand-700",
  mint: "bg-accent-100 text-accent-700",
  pink: "bg-blush-200 text-navy-800",
};

export const accentTile: Record<Accent, string> = {
  sky: "from-brand-100 to-brand-50",
  mint: "from-accent-100 to-accent-50",
  pink: "from-blush-200 to-blush-100",
};

export const accentDot: Record<Accent, string> = {
  sky: "bg-brand-500",
  mint: "bg-accent-500",
  pink: "bg-blush-500",
};

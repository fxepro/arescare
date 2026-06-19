import { clsx } from "@/lib/clsx";
import type { Step } from "@/lib/content";

/**
 * Numbered "how it works" blocks — one implementation, two tones.
 *   navy  → dark cells, sits on a .banner-surface card
 *   light → white cells on a light section
 */
export function StepGrid({
  steps,
  tone = "navy",
  className,
}: {
  steps: Step[];
  tone?: "navy" | "light";
  className?: string;
}) {
  const dark = tone === "navy";
  return (
    <div
      className={clsx(
        "grid gap-px overflow-hidden rounded-2xl sm:grid-cols-2 lg:grid-cols-4",
        dark ? "bg-white/10" : "bg-ink-200",
        className,
      )}
    >
      {steps.map((step) => (
        <div key={step.n} className={clsx("p-8", dark ? "bg-navy-950" : "bg-white")}>
          <span
            className={clsx(
              "font-display text-3xl font-medium",
              dark ? "text-brand-300" : "text-brand-600",
            )}
          >
            {step.n}
          </span>
          <h3 className={clsx("mt-4 text-xl", dark ? "text-white" : "text-ink-900")}>
            {step.title}
          </h3>
          <p className={clsx("mt-2 text-base", dark ? "text-ink-300" : "text-ink-600")}>
            {step.body}
          </p>
        </div>
      ))}
    </div>
  );
}

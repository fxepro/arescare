import { clsx } from "@/lib/clsx";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        align === "center" && "mx-auto max-w-2xl text-center",
        className,
      )}
    >
      {eyebrow && (
        <span className={clsx("eyebrow", light && "eyebrow-light")}>{eyebrow}</span>
      )}
      <h2
        className={clsx(
          "mt-4 text-3xl sm:text-4xl",
          light ? "text-white" : "text-ink-900",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={clsx(
            "mt-4 text-lg",
            light ? "text-ink-200" : "text-ink-600",
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

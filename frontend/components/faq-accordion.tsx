import { Icon } from "@/components/icon";

export type Faq = { q: string; a: string };

/**
 * Accessible FAQ list using native <details> — no client JS required.
 */
export function FaqAccordion({ items }: { items: Faq[] }) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <details key={item.q} className="card group p-0">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-lg font-medium text-ink-900 [&::-webkit-details-marker]:hidden">
            {item.q}
            <Icon
              name="chevron"
              className="h-5 w-5 shrink-0 text-brand-600 transition-transform group-open:rotate-180"
            />
          </summary>
          <div className="px-6 pb-6 text-base text-ink-600">{item.a}</div>
        </details>
      ))}
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function Logo({ variant = "dark" }: { variant?: "dark" | "white" }) {
  const src = variant === "white" ? site.logoWhite : site.logo;
  return (
    <Link href="/" aria-label={`${site.name} home`} className="inline-flex">
      <Image
        src={src}
        alt={`${site.name} — ${site.tagline}`}
        width={168}
        height={44}
        className="h-9 w-auto"
        priority
      />
    </Link>
  );
}

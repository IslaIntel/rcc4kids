"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { switcherCopy } from "@/lib/copy";
import { CONCEPT_ROUTES, type ConceptSlug } from "@/lib/types";

const links: { href: string; slug: ConceptSlug | "hub"; key: "a" | "b" | "c" | "hub"; short: string }[] = [
  { href: CONCEPT_ROUTES.documentation, slug: "documentation", key: "a", short: switcherCopy.aShort },
  { href: CONCEPT_ROUTES.viewbook, slug: "viewbook", key: "b", short: switcherCopy.bShort },
  { href: CONCEPT_ROUTES.blocks, slug: "blocks", key: "c", short: switcherCopy.cShort },
  { href: "/concepts", slug: "hub", key: "hub", short: "⌂" },
];

export function ConceptSwitcher() {
  const pathname = usePathname() || "";

  return (
    <nav
      data-section="switcher"
      aria-label={switcherCopy.label}
      className="fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] left-1/2 z-[90] flex w-[min(24rem,calc(100vw-1.25rem))] -translate-x-1/2 items-center justify-between gap-0.5 rounded-full border border-black/10 bg-white/95 p-1 text-[0.62rem] tracking-[0.1em] text-[var(--tone-muted)] uppercase shadow-lg backdrop-blur-xl"
    >
      {links.map((link) => {
        const active =
          link.slug === "hub"
            ? pathname === "/concepts"
            : pathname.includes(`/concepts/${link.slug}`);
        return (
          <Link
            key={link.href}
            href={link.href}
            data-concept-link={link.slug}
            className={`flex min-h-11 min-w-11 flex-1 items-center justify-center rounded-full px-2 py-2 transition sm:min-w-0 sm:flex-none sm:px-4 ${
              active
                ? "bg-[var(--tone-accent)] font-semibold text-white"
                : "hover:bg-black/5 hover:text-[var(--tone-fg)]"
            }`}
          >
            <span className="sm:hidden">{link.short}</span>
            <span className="hidden sm:inline">
              {link.key === "hub" ? switcherCopy.hub : switcherCopy[link.key]}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}

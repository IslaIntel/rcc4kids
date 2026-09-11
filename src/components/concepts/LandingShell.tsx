"use client";

import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteNav } from "@/components/site/SiteNav";
import { ConceptSwitcher } from "./ConceptSwitcher";
import { toneClass, toneVars } from "@/lib/tones";
import type { ConceptSlug } from "@/lib/types";

export function LandingShell({
  concept,
  children,
}: {
  concept: ConceptSlug;
  children: React.ReactNode;
}) {
  return (
    <div
      data-concept={concept}
      className={`${toneClass(concept)} min-h-screen bg-[var(--tone-bg)] text-[var(--tone-fg)]`}
      style={toneVars(concept)}
    >
      <SmoothScroll>
        <SiteNav concept={concept} />
        <main className="pb-[max(7rem,calc(env(safe-area-inset-bottom)+5.5rem))]">{children}</main>
        <SiteFooter />
        <ConceptSwitcher />
      </SmoothScroll>
    </div>
  );
}

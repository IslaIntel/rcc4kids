"use client";

import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteNav } from "@/components/site/SiteNav";
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
        <SiteNav />
        <main>{children}</main>
        <SiteFooter />
      </SmoothScroll>
    </div>
  );
}

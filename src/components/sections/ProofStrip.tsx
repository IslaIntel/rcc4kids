import { CountUp } from "@/components/motion/CountUp";
import { org, shared } from "@/lib/copy";
import { business } from "@/lib/copy";
import type { ConceptSlug } from "@/lib/types";
import { Section } from "./Section";

export function ProofStrip({ concept }: { concept: ConceptSlug }) {
  if (concept === "documentation") {
    return (
      <Section id="proof" className="py-10" innerClassName="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {shared.proofFacts.map((fact, i) => (
          <div
            key={fact}
            className="rounded-sm border border-black/10 bg-white/60 p-4 font-mono text-sm"
          >
            <span className="text-[var(--tone-accent)]">0{i + 1}.</span> {fact}
          </div>
        ))}
      </Section>
    );
  }

  return (
    <Section id="proof" className="py-10">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
        <div className="text-center">
          <p className="font-display text-3xl text-[var(--tone-accent)]">
            <CountUp value={org.since} />
          </p>
          <p className="mt-1 text-xs uppercase tracking-wide text-[var(--tone-muted)]">Since</p>
        </div>
        <div className="text-center">
          <p className="font-display text-3xl text-[var(--tone-accent)]">
            <CountUp value={business.license.capacity} />
          </p>
          <p className="mt-1 text-xs uppercase tracking-wide text-[var(--tone-muted)]">Licensed</p>
        </div>
        <div className="col-span-2 text-center md:col-span-1">
          <p className="font-display text-3xl text-[var(--tone-accent)]">5.0</p>
          <p className="mt-1 text-xs uppercase tracking-wide text-[var(--tone-muted)]">Google</p>
        </div>
        <div className="col-span-2 text-center md:col-span-2">
          <p className="font-display text-lg text-[var(--tone-accent)]">NV Mag</p>
          <p className="mt-1 text-xs uppercase tracking-wide text-[var(--tone-muted)]">
            Best Daycares 2023 & 2026
          </p>
        </div>
      </div>
    </Section>
  );
}

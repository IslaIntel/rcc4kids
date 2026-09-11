import { LandingShell } from "./LandingShell";
import { Hero } from "@/components/sections/Hero";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { Philosophy } from "@/components/sections/Philosophy";
import { Curriculum } from "@/components/sections/Curriculum";
import { Programs } from "@/components/sections/Programs";
import { Flock } from "@/components/sections/Flock";
import { Rosslyn } from "@/components/sections/Rosslyn";
import { People } from "@/components/sections/People";
import { EnrollmentPath } from "@/components/sections/EnrollmentPath";
import { Tuition } from "@/components/sections/Tuition";
import { Voices } from "@/components/sections/Voices";
import { CareersBand } from "@/components/sections/CareersBand";
import { TourForm } from "@/components/site/TourForm";
import { shared } from "@/lib/copy";
import { Section } from "@/components/sections/Section";

export function DocumentationLanding() {
  const concept = "documentation" as const;
  return (
    <LandingShell concept={concept}>
      <Hero concept={concept} />
      <ProofStrip concept={concept} />
      <Section id="day-sequence" className="py-12">
        <p className="mb-6 font-mono text-xs uppercase tracking-widest text-[var(--tone-accent)]">
          Daily documentation
        </p>
        <ol className="space-y-4">
          {shared.daySequence.map((step) => (
            <li
              key={step.label}
              className="grid gap-2 border-b border-black/10 pb-4 md:grid-cols-[4rem_1fr]"
            >
              <span className="font-mono text-sm text-[var(--tone-accent)]">{step.time}</span>
              <div>
                <p className="font-display text-lg">{step.label}</p>
                <p className="text-sm text-[var(--tone-muted)]">{step.note}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>
      <Philosophy concept={concept} />
      <Curriculum concept={concept} />
      <Programs concept={concept} />
      <Flock concept={concept} />
      <Rosslyn />
      <People />
      <EnrollmentPath />
      <Tuition />
      <Voices />
      <CareersBand />
      <TourForm concept={concept} />
    </LandingShell>
  );
}

import { ClipReveal } from "@/components/motion/ClipReveal";
import { business, getConceptVoice } from "@/lib/copy";
import type { ConceptSlug } from "@/lib/types";
import { Section } from "./Section";

export function Philosophy({ concept }: { concept: ConceptSlug }) {
  const voice = getConceptVoice(concept);

  return (
    <Section id="philosophy" className="bg-[var(--tone-paper)]">
      <ClipReveal>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--tone-accent)]">
          Philosophy
        </p>
        <h2 className="mt-3 max-w-3xl font-display text-3xl text-[var(--tone-fg)] md:text-4xl">
          {voice.philosophyIntro}
        </h2>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-[var(--tone-muted)]">
          {business.philosophy.curriculum}
        </p>
      </ClipReveal>
    </Section>
  );
}

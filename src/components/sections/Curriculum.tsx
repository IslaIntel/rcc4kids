import Image from "next/image";
import { ClipReveal } from "@/components/motion/ClipReveal";
import { getConceptVoice } from "@/lib/copy";
import { media } from "@/lib/media";
import type { ConceptSlug } from "@/lib/types";
import { Section } from "./Section";

export function Curriculum({ concept }: { concept: ConceptSlug }) {
  const voice = getConceptVoice(concept);

  return (
    <Section id="curriculum">
      <div className="grid gap-8 lg:grid-cols-2">
        <ClipReveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--tone-accent)]">
            Emergent curriculum
          </p>
          <h2 className="mt-3 font-display text-3xl text-[var(--tone-fg)]">
            Heard, supported, challenged.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--tone-muted)]">
            {voice.curriculumIntro}
          </p>
        </ClipReveal>
        <ClipReveal>
          <div
            className={
              concept === "documentation"
                ? "rounded-sm border border-black/10 bg-white p-3"
                : "rounded-2xl border border-black/10 bg-white p-4"
            }
          >
            <Image
              src={media.sampleLessonPlan}
              alt="Sample lesson plan"
              width={300}
              height={200}
              className="w-full rounded object-cover"
            />
            <p className="mt-3 text-sm text-[var(--tone-muted)]">
              Sample lesson plan — projects follow what is relevant to the children.
            </p>
          </div>
        </ClipReveal>
      </div>
    </Section>
  );
}

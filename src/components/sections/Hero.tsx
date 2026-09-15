import Image from "next/image";
import { ClipReveal } from "@/components/motion/ClipReveal";
import { business, getConceptVoice } from "@/lib/copy";
import { media } from "@/lib/media";
import type { ConceptSlug } from "@/lib/types";
import { Section } from "./Section";

export function Hero({ concept }: { concept: ConceptSlug }) {
  const voice = getConceptVoice(concept);

  return (
    <Section
      id="hero"
      className="pb-8 pt-6 md:pb-12 md:pt-10"
      innerClassName="grid items-center gap-8 lg:grid-cols-2"
    >
      <ClipReveal>
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[var(--tone-muted)]">
          {voice.hero.kicker}
        </p>
        <h1 className="font-display text-4xl leading-[1.05] text-[var(--tone-fg)] md:text-5xl lg:text-6xl">
          {voice.hero.headline}
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--tone-muted)] md:text-lg">
          {voice.hero.lede}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#tour"
            data-cta="primary"
            className="inline-flex min-h-11 items-center rounded-full bg-[var(--tone-primary)] px-6 text-sm font-semibold text-[var(--tone-on-primary)]"
          >
            {business.ctas.primary}
          </a>
          <a
            href="#programs"
            data-cta="secondary"
            className="inline-flex min-h-11 items-center rounded-full border border-black/15 px-6 text-sm font-semibold text-[var(--tone-fg)]"
          >
            {business.ctas.secondary}
          </a>
        </div>
      </ClipReveal>

      <ClipReveal>
        <div className="relative overflow-hidden rounded-2xl">
          <Image
            src={media.hero.viewbook}
            alt="RCC classroom environment"
            width={1024}
            height={683}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </ClipReveal>
    </Section>
  );
}

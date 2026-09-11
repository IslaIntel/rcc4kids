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
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[var(--tone-accent)]">
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
            className="inline-flex min-h-11 items-center rounded-full bg-[var(--tone-accent)] px-6 text-sm font-semibold text-white"
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

      <ClipReveal className="relative">
        {concept === "blocks" && (
          <div className="pointer-events-none absolute -left-4 top-4 h-24 w-24 rounded-2xl bg-[#009040]/20 motion-safe:animate-float" />
        )}
        {concept === "blocks" && (
          <div className="pointer-events-none absolute bottom-8 right-0 h-16 w-16 rounded-full bg-[#E05020]/25 motion-safe:animate-float-delayed" />
        )}
        <div
          className={
            concept === "documentation"
              ? "relative overflow-hidden rounded-sm border border-black/10 bg-white p-2 shadow-sm"
              : "relative overflow-hidden rounded-2xl"
          }
        >
          <Image
            src={media.hero[concept]}
            alt="RCC classroom environment"
            width={1024}
            height={683}
            className="h-auto w-full object-cover"
            priority
          />
          {concept === "documentation" && (
            <p className="mt-2 font-mono text-xs text-[var(--tone-muted)]">
              Fig. 1 — Materials table, morning rhythm
            </p>
          )}
        </div>
      </ClipReveal>
    </Section>
  );
}

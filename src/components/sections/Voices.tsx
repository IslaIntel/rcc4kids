import { ClipReveal } from "@/components/motion/ClipReveal";
import { Marquee } from "@/components/motion/Marquee";
import { business } from "@/lib/copy";
import { Section } from "./Section";

export function Voices() {
  return (
    <Section id="voices" className="bg-[var(--tone-paper)]">
      <ClipReveal>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--tone-muted)]">
          Parent voices
        </p>
        <h2 className="mt-3 font-display text-3xl text-[var(--tone-fg)]">
          {business.reviews.googleRating} stars · {business.reviews.googleCount} reviews
        </h2>
      </ClipReveal>

      <Marquee items={business.reviews.themes} className="mt-8 text-[var(--tone-muted)]" />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {business.reviews.quotes.slice(0, 4).map((q) => (
          <ClipReveal key={q.text.slice(0, 40)}>
            <blockquote className="rounded-xl border border-black/10 bg-white p-5">
              <p className="text-sm leading-relaxed text-[var(--tone-fg)]">&ldquo;{q.text}&rdquo;</p>
              <footer className="mt-3 text-xs text-[var(--tone-muted)]">{q.attribution}</footer>
            </blockquote>
          </ClipReveal>
        ))}
      </div>
    </Section>
  );
}

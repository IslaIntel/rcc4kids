import { ClipReveal } from "@/components/motion/ClipReveal";
import { business } from "@/lib/copy";
import { Section } from "./Section";

export function People() {
  return (
    <Section id="people">
      <ClipReveal>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--tone-accent)]">
          People
        </p>
        <h2 className="mt-3 font-display text-3xl text-[var(--tone-fg)]">
          Tenure is the story.
        </h2>
      </ClipReveal>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {business.leadership.map((person) => (
          <ClipReveal key={person.name}>
            <article className="rounded-xl border border-black/10 bg-white p-5">
              <h3 className="font-display text-xl text-[var(--tone-fg)]">{person.name}</h3>
              <p className="text-sm text-[var(--tone-accent)]">{person.title}</p>
              <p className="mt-2 text-sm text-[var(--tone-muted)]">Joined RCC in {person.joined}</p>
            </article>
          </ClipReveal>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-[var(--tone-muted)]">
          Educator team
        </h3>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {business.educators.map((e) => (
            <div
              key={e.name}
              className="rounded-lg border border-black/5 bg-[var(--tone-paper)] px-4 py-3"
            >
              <p className="font-medium text-[var(--tone-fg)]">{e.name}</p>
              <p className="text-xs text-[var(--tone-muted)]">Since {e.joined}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-[var(--tone-muted)]">
          Board of Directors
        </h3>
        <div className="flex flex-wrap gap-3">
          {business.board.website.map((m) => (
            <span
              key={m.name}
              className="rounded-full border border-black/10 px-4 py-2 text-sm text-[var(--tone-muted)]"
            >
              {m.name} · {m.role}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}

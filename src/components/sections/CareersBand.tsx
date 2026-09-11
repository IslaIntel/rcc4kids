import { ClipReveal } from "@/components/motion/ClipReveal";
import { business } from "@/lib/copy";
import { Section } from "./Section";

export function CareersBand() {
  return (
    <Section id="careers">
      <ClipReveal>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--tone-accent)]">
          Careers
        </p>
        <h2 className="mt-3 font-display text-3xl text-[var(--tone-fg)]">We&apos;re hiring.</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {business.careers.openRoles.map((role) => (
            <span
              key={role}
              className="rounded-full border border-black/10 px-4 py-2 text-sm font-medium"
            >
              {role}
            </span>
          ))}
        </div>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2 text-sm text-[var(--tone-muted)]">
          {business.careers.benefits.map((b) => (
            <li key={b}>— {b}</li>
          ))}
        </ul>
        <a
          href={`mailto:${business.contact.email}?subject=RCC Careers`}
          className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--tone-accent)] underline"
        >
          Email resume to {business.contact.email}
        </a>
      </ClipReveal>
    </Section>
  );
}

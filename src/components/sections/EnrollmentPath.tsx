import { ClipReveal } from "@/components/motion/ClipReveal";
import { business } from "@/lib/copy";
import { enrollmentStepColors } from "@/lib/tokens";
import { Section } from "./Section";

export function EnrollmentPath() {
  return (
    <Section id="enrollment" className="bg-[var(--tone-paper)]">
      <ClipReveal>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--tone-muted)]">
          Enrollment
        </p>
        <h2 className="mt-3 font-display text-3xl text-[var(--tone-fg)]">
          Enrolling for {business.enrollment.enrollingFor}.
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-[var(--tone-muted)]">
          Admission depends on classroom availability. Waitlists are common, and we keep families
          informed throughout the process.
        </p>
      </ClipReveal>

      <ol className="mt-10 grid gap-4 md:grid-cols-2">
        {business.enrollment.steps.map((step, i) => {
          const color = enrollmentStepColors[i];
          return (
            <ClipReveal key={step.title}>
              <li className="flex gap-4 rounded-xl border border-black/10 bg-white p-5">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                  style={{ backgroundColor: color.bg, color: color.fg }}
                  aria-hidden
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-lg text-[var(--tone-fg)]">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--tone-muted)]">{step.body}</p>
                </div>
              </li>
            </ClipReveal>
          );
        })}
      </ol>
    </Section>
  );
}

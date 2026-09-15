import Image from "next/image";
import { ClipReveal } from "@/components/motion/ClipReveal";
import { business } from "@/lib/copy";
import { media } from "@/lib/media";
import { Section } from "./Section";

const programImages: Record<string, string> = {
  infant: media.infant,
  toddler: media.toddler,
  twos: media.twos,
  preschool: media.preschool,
};

export function Programs() {
  return (
    <Section id="programs" className="bg-[var(--tone-paper)]">
      <ClipReveal>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--tone-muted)]">
          Programs
        </p>
        <h2 className="mt-3 font-display text-3xl text-[var(--tone-fg)] md:text-4xl">
          Birth through age six.
        </h2>
      </ClipReveal>
      <div className="mt-10 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {business.programs.map((p) => (
          <ClipReveal key={p.slug} className="h-full">
            <article className="flex h-full flex-col overflow-hidden rounded-xl border border-black/10 bg-white">
              <Image
                src={programImages[p.slug]}
                alt={p.name}
                width={400}
                height={260}
                className="h-40 w-full shrink-0 object-cover"
              />
              <div className="flex flex-1 flex-col p-4">
                <h3 className="font-display text-lg text-[var(--tone-fg)]">{p.name}</h3>
                <p className="mt-1 text-xs font-medium text-[var(--tone-muted)]">
                  {p.ages} · {p.ratio}
                </p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--tone-muted)]">
                  {p.pedagogy}
                </p>
              </div>
            </article>
          </ClipReveal>
        ))}
      </div>
    </Section>
  );
}

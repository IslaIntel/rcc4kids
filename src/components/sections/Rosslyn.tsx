import Image from "next/image";
import { ClipReveal } from "@/components/motion/ClipReveal";
import { business } from "@/lib/copy";
import { media } from "@/lib/media";
import { Section } from "./Section";

export function Rosslyn() {
  return (
    <Section id="rosslyn" className="bg-[var(--tone-paper)]">
      <div className="grid gap-8 lg:grid-cols-2">
        <ClipReveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--tone-accent)]">
            Rosslyn campus
          </p>
          <h2 className="mt-3 font-display text-3xl text-[var(--tone-fg)]">
            Wilson Blvd to Freedom Park.
          </h2>
          <ul className="mt-6 space-y-3 text-sm leading-relaxed text-[var(--tone-muted)]">
            {business.place.campusNotes.map((note) => (
              <li key={note} className="flex gap-2">
                <span className="text-[var(--tone-accent)]">—</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm font-medium text-[var(--tone-fg)]">
            {business.contact.address.full}
          </p>
        </ClipReveal>
        <ClipReveal>
          <div className="overflow-hidden rounded-2xl border border-black/10">
            <Image
              src={media.rosslyn}
              alt="Rosslyn neighborhood near RCC"
              width={1024}
              height={731}
              className="h-64 w-full object-cover md:h-80"
            />
            <div className="bg-white p-4 text-sm text-[var(--tone-muted)]">
              Entrance past Kent Street · Metro accessible · Parents&apos; Night Out
            </div>
          </div>
        </ClipReveal>
      </div>
    </Section>
  );
}

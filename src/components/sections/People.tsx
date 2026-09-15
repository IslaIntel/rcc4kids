import Image from "next/image";
import clsx from "clsx";
import { ClipReveal } from "@/components/motion/ClipReveal";
import { business } from "@/lib/copy";
import { Section } from "./Section";

function initials(name: string) {
  return name
    .replace(/^(Ms\.|Mr\.)\s/, "")
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function PersonTile({
  name,
  role,
  photo,
  className,
}: {
  name: string;
  role: string;
  photo?: string;
  className?: string;
}) {
  return (
    <figure className={clsx("text-center", className)}>
      {photo ? (
        <Image
          src={photo}
          alt={name}
          width={250}
          height={250}
          className="mx-auto aspect-square w-full rounded-full object-cover"
        />
      ) : (
        <div
          aria-hidden
          className="mx-auto flex aspect-square w-full items-center justify-center rounded-full bg-[var(--tone-paper)] text-lg font-display text-[var(--tone-muted)]"
        >
          {initials(name)}
        </div>
      )}
      <figcaption className="mt-2">
        <p className="font-display text-sm leading-tight text-[var(--tone-fg)]">{name}</p>
        <p className="mt-0.5 text-xs text-[var(--tone-muted)]">{role}</p>
      </figcaption>
    </figure>
  );
}

export function People() {
  return (
    <Section id="people">
      <ClipReveal>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--tone-muted)]">
          People
        </p>
        <h2 className="mt-3 font-display text-3xl text-[var(--tone-fg)]">The RCC community.</h2>
      </ClipReveal>

      <div className="mt-10">
        <h3 className="mb-5 text-sm font-semibold uppercase tracking-wide text-[var(--tone-muted)]">
          Leadership
        </h3>
        <div className="mx-auto grid max-w-2xl grid-cols-3 gap-4 md:gap-8">
          {business.leadership.map((person) => (
            <PersonTile
              key={person.name}
              name={person.name}
              role={`${person.title} · since ${person.joined}`}
              photo={person.photo}
            />
          ))}
        </div>
      </div>

      <div className="mt-14">
        <h3 className="mb-5 text-sm font-semibold uppercase tracking-wide text-[var(--tone-muted)]">
          Educator team
        </h3>
        <div className="grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3 lg:grid-cols-5">
          {business.educators.map((e, i) => (
            <PersonTile
              key={e.name}
              name={e.name}
              role={`Since ${e.joined}`}
              photo={e.photo}
              className={i === 10 ? "lg:col-start-2" : undefined}
            />
          ))}
        </div>
      </div>

      <div className="mt-14">
        <h3 className="mb-5 text-sm font-semibold uppercase tracking-wide text-[var(--tone-muted)]">
          Board of Directors
        </h3>
        <div className="grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-4">
          {business.board.website.map((m) => (
            <PersonTile key={m.name} name={m.name} role={m.role} photo={m.photo} />
          ))}
        </div>
      </div>
    </Section>
  );
}

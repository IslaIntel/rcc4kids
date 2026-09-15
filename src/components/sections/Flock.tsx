"use client";

import { useRef } from "react";
import { ClipReveal } from "@/components/motion/ClipReveal";
import { business } from "@/lib/copy";
import { classroomColors } from "@/lib/tokens";
import { Section } from "./Section";

const colorMap: Record<string, string> = {
  "Blue Jays": classroomColors["blue-jays"],
  Cardinals: classroomColors.cardinals,
  Koalas: classroomColors.koalas,
  Swans: classroomColors.swans,
  "Lion Cubs": classroomColors["lion-cubs"],
  Wolves: classroomColors.wolves,
  Bears: classroomColors.bears,
};

const programBySlug = Object.fromEntries(business.programs.map((p) => [p.slug, p]));

export function Flock() {
  const scroller = useRef<HTMLDivElement>(null);

  function scrollByCard(direction: number) {
    const el = scroller.current;
    if (!el) return;
    const card = el.querySelector("[data-classroom-card]");
    const width = card ? card.getBoundingClientRect().width + 12 : 232;
    el.scrollBy({ left: direction * width, behavior: "smooth" });
  }

  return (
    <Section id="flock">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <ClipReveal>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--tone-muted)]">
            Classrooms
          </p>
          <h2 className="mt-3 font-display text-3xl text-[var(--tone-fg)]">Our classrooms.</h2>
          <p className="mt-3 max-w-xl text-sm text-[var(--tone-muted)]">
            Each room has a name, a ratio, and a place in the flock.
          </p>
        </ClipReveal>
        <div className="hidden gap-2 md:flex">
          <button
            type="button"
            aria-label="Previous classrooms"
            onClick={() => scrollByCard(-1)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-lg"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next classrooms"
            onClick={() => scrollByCard(1)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-lg"
          >
            ›
          </button>
        </div>
      </div>

      <div
        ref={scroller}
        className="mt-10 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {business.classrooms.map((room) => {
          const color = colorMap[room.name] ?? "#303030";
          const program = programBySlug[room.program];
          return (
            <article
              key={room.name}
              data-classroom-card
              className="w-[min(78vw,240px)] shrink-0 snap-start rounded-xl border border-black/10 bg-white p-4"
            >
              <div className="flex items-center gap-2">
                <span
                  className="h-2.5 w-2.5 shrink-0 rounded-sm"
                  style={{ backgroundColor: color }}
                  aria-hidden
                />
                <h3 className="font-display text-lg text-[var(--tone-fg)]">{room.name}</h3>
              </div>
              <p className="mt-2 text-sm text-[var(--tone-muted)]">
                {program?.name} · {room.ratio}
              </p>
              <p className="mt-3 text-sm font-medium text-[var(--tone-fg)]">
                ${room.tuitionMonthly.toLocaleString()}/mo
              </p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

import clsx from "clsx";
import { ClipReveal } from "@/components/motion/ClipReveal";
import { business } from "@/lib/copy";
import { classroomColors } from "@/lib/tokens";
import type { ConceptSlug } from "@/lib/types";
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

export function Flock({ concept }: { concept: ConceptSlug }) {
  return (
    <Section id="flock">
      <ClipReveal>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--tone-accent)]">
          Classrooms
        </p>
        <h2 className="mt-3 font-display text-3xl text-[var(--tone-fg)]">
          {concept === "viewbook" ? "Pick your room." : "The flock."}
        </h2>
      </ClipReveal>

      <div
        className={clsx(
          "mt-10",
          concept === "blocks"
            ? "grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            : "grid gap-4 md:grid-cols-2"
        )}
      >
        {business.classrooms.map((room) => {
          const color = colorMap[room.name] ?? "#303030";
          return (
            <ClipReveal key={room.name}>
              <article
                className={clsx(
                  "rounded-xl p-5",
                  concept === "blocks" ? "text-white" : "border border-black/10 bg-white"
                )}
                style={
                  concept === "blocks"
                    ? { backgroundColor: color }
                    : concept === "documentation"
                      ? { borderLeft: `4px solid ${color}` }
                      : undefined
                }
              >
                <h3
                  className="font-display text-xl"
                  style={concept !== "blocks" ? { color } : undefined}
                >
                  {room.name}
                </h3>
                <p
                  className={clsx(
                    "mt-2 text-sm",
                    concept === "blocks" ? "text-white/85" : "text-[var(--tone-muted)]"
                  )}
                >
                  {room.ratio} · ${room.tuitionMonthly.toLocaleString()}/mo
                </p>
                {concept === "viewbook" && (
                  <p className="mt-3 text-xs uppercase tracking-wide text-[var(--tone-accent)]">
                    Guide available on tour
                  </p>
                )}
              </article>
            </ClipReveal>
          );
        })}
      </div>
    </Section>
  );
}

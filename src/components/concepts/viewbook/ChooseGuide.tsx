"use client";

import { useState } from "react";
import Image from "next/image";
import { guides } from "@/lib/copy";
import { ClipReveal } from "@/components/motion/ClipReveal";

export function ChooseGuide() {
  const [active, setActive] = useState(guides[0].id);
  const guide = guides.find((g) => g.id === active) ?? guides[0];

  return (
    <div data-section="choose-guide" className="rounded-2xl border border-black/10 bg-white p-6 md:p-8">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--tone-muted)]">
        Choose a guide
      </p>
      <p className="mt-2 max-w-xl text-sm text-[var(--tone-muted)]">
        These are the people you&apos;ll meet on a tour. Pick a name to see who they are.
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {guides.map((g) => (
          <button
            key={g.id}
            type="button"
            onClick={() => setActive(g.id)}
            className={`min-h-11 rounded-full px-4 text-sm font-medium transition ${
              active === g.id
                ? "bg-[var(--tone-primary)] text-[var(--tone-on-primary)]"
                : "border border-black/10 text-[var(--tone-muted)] hover:border-black/20"
            }`}
          >
            {g.name.split(" ")[0]}
          </button>
        ))}
      </div>
      <div key={guide.id} className="mt-8 grid items-center gap-6 md:grid-cols-[9rem_1fr]">
        <Image
          src={guide.photo}
          alt={guide.name}
          width={250}
          height={250}
          className="h-36 w-36 rounded-full object-cover"
        />
        <ClipReveal>
          <h3 className="font-display text-2xl text-[var(--tone-fg)]">{guide.name}</h3>
          <p className="text-sm font-medium text-[var(--tone-muted)]">{guide.title}</p>
          <p className="mt-3 text-base leading-relaxed text-[var(--tone-muted)]">
            &ldquo;{guide.quote}&rdquo;
          </p>
          <p className="mt-2 text-xs text-[var(--tone-muted)]">At RCC since {guide.joined}</p>
        </ClipReveal>
      </div>
    </div>
  );
}

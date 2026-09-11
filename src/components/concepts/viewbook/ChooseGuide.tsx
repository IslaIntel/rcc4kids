"use client";

import { useState } from "react";
import { guides } from "@/lib/copy";
import { ClipReveal } from "@/components/motion/ClipReveal";

export function ChooseGuide() {
  const [active, setActive] = useState(guides[0].id);
  const guide = guides.find((g) => g.id === active) ?? guides[0];

  return (
    <div data-section="choose-guide" className="rounded-2xl border border-black/10 bg-white p-6">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--tone-accent)]">
        Choose a guide
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {guides.map((g) => (
          <button
            key={g.id}
            type="button"
            onClick={() => setActive(g.id)}
            className={`min-h-11 rounded-full px-4 text-sm font-medium transition ${
              active === g.id
                ? "bg-[var(--tone-accent)] text-white"
                : "border border-black/10 text-[var(--tone-muted)]"
            }`}
          >
            {g.name.split(" ")[0]}
          </button>
        ))}
      </div>
      <ClipReveal className="mt-6">
        <h3 className="font-display text-2xl text-[var(--tone-fg)]">{guide.name}</h3>
        <p className="text-sm text-[var(--tone-accent)]">{guide.title}</p>
        <p className="mt-3 text-sm leading-relaxed text-[var(--tone-muted)]">
          &ldquo;{guide.quote}&rdquo;
        </p>
        <p className="mt-2 text-xs text-[var(--tone-muted)]">At RCC since {guide.joined}</p>
      </ClipReveal>
    </div>
  );
}

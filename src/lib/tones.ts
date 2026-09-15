import type { CSSProperties } from "react";
import type { ConceptSlug } from "./types";
import { conceptTheme } from "./tokens";

export function toneVars(concept: ConceptSlug) {
  const t = conceptTheme(concept);
  return {
    "--tone-bg": t.bg,
    "--tone-fg": t.fg,
    "--tone-muted": t.muted,
    "--tone-primary": t.primary,
    "--tone-on-primary": t.onPrimary,
    "--tone-secondary": t.secondary,
    "--tone-accent": t.accent,
    "--tone-supporting": t.supporting,
    "--tone-paper": t.paper,
  } as CSSProperties;
}

export function toneClass(concept: ConceptSlug) {
  return `tone-${concept}`;
}

import brand from "@/content/brand.json";
import type { ConceptSlug } from "./types";

export const palette = brand.palette;
export const classroomColors = brand.classroomColors;

export function conceptTheme(concept: ConceptSlug) {
  const themes: Record<
    ConceptSlug,
    { bg: string; fg: string; muted: string; accent: string; paper: string }
  > = {
    documentation: {
      bg: "#F6F1E8",
      fg: "#1A1A1A",
      muted: "#5C5348",
      accent: "#009040",
      paper: "#FAF6EF",
    },
    viewbook: {
      bg: "#FAF8F4",
      fg: "#1A1A1A",
      muted: "#4B5563",
      accent: "#2070B0",
      paper: "#FFFFFF",
    },
    blocks: {
      bg: "#FAF8F4",
      fg: "#303030",
      muted: "#4A4A4A",
      accent: "#E05020",
      paper: "#FFFFFF",
    },
  };
  return themes[concept];
}

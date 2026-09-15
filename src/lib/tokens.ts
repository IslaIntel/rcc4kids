import brand from "@/content/brand.json";
import type { ConceptSlug } from "./types";

export const palette = brand.palette;
export const classroomColors = brand.classroomColors;

export type ConceptTheme = {
  bg: string;
  fg: string;
  muted: string;
  primary: string;
  onPrimary: string;
  secondary: string;
  accent: string;
  supporting: string;
  paper: string;
};

const brandPlayground = {
  primary: palette.green,
  onPrimary: palette.ink,
  secondary: palette.yellow,
  accent: palette.blue,
  supporting: palette.red,
};

export function conceptTheme(concept: ConceptSlug): ConceptTheme {
  const themes: Record<ConceptSlug, ConceptTheme> = {
    documentation: {
      bg: "#F6F1E8",
      fg: "#1A1A1A",
      muted: "#5C5348",
      paper: "#FAF6EF",
      ...brandPlayground,
    },
    viewbook: {
      bg: "#FAF8F4",
      fg: "#1A1714",
      muted: "#5C5348",
      paper: "#FFFFFF",
      ...brandPlayground,
    },
    blocks: {
      bg: "#FAF8F4",
      fg: "#303030",
      muted: "#4A4A4A",
      paper: "#FFFFFF",
      ...brandPlayground,
    },
  };
  return themes[concept];
}

export const enrollmentStepColors = [
  { bg: palette.green, fg: palette.ink },
  { bg: palette.yellow, fg: palette.ink },
  { bg: palette.blue, fg: "#FFFFFF" },
  { bg: palette.red, fg: "#FFFFFF" },
] as const;

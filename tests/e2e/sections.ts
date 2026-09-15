export const SECTION_IDS = [
  "shell",
  "hero",
  "proof",
  "choose-guide",
  "philosophy",
  "curriculum",
  "programs",
  "flock",
  "rosslyn",
  "people",
  "enrollment",
  "tuition",
  "voices",
  "careers",
  "tour",
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

export const CONCEPTS = ["viewbook"] as const;
export type Concept = (typeof CONCEPTS)[number];

export function conceptPath(concept: Concept) {
  return concept === "viewbook" ? "/" : `/concepts/${concept}`;
}

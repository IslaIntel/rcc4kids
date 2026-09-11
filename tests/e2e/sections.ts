export const SECTION_IDS = [
  "shell",
  "hero",
  "proof",
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
  "switcher",
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

export const CONCEPTS = ["documentation", "viewbook", "blocks"] as const;
export type Concept = (typeof CONCEPTS)[number];

export function conceptPath(concept: Concept) {
  return `/concepts/${concept}`;
}

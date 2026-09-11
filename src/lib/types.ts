export type ConceptSlug = "documentation" | "viewbook" | "blocks";

export const CONCEPT_SLUGS: ConceptSlug[] = ["documentation", "viewbook", "blocks"];

export const CONCEPT_ROUTES: Record<ConceptSlug, string> = {
  documentation: "/concepts/documentation",
  viewbook: "/concepts/viewbook",
  blocks: "/concepts/blocks",
};

import business from "@/content/business.json";
import brand from "@/content/brand.json";
import type { ConceptSlug } from "./types";

export const org = {
  name: brand.name,
  legalName: brand.legalName,
  short: brand.short,
  tagline: brand.tagline,
  since: business.legal.formed,
};

export const shared = {
  mission:
    "We are a community of families and educators working in partnership to provide a joyful environment where children are encouraged to explore and interact with the world around them.",
  proofFacts: [
    `Since ${business.legal.formed}`,
    "NV Mag Best Daycares",
    `Licensed ${business.license.capacity}`,
    business.hours.licensed,
    "Ratios 1:4 to 1:10",
  ],
  daySequence: [
    { time: "7:30", label: "Arrival", note: "Warm greetings, settling in" },
    { time: "9:00", label: "Materials", note: "Child-led exploration and documentation" },
    { time: "11:00", label: "Freedom Park", note: "Weekly walk to Rosslyn's green heart" },
    { time: "3:00", label: "Projects", note: "Emergent curriculum in action" },
    { time: "5:30", label: "Pickup", note: "Daily photos and conversation with families" },
  ],
};

export const conceptIndex = [
  {
    slug: "documentation" as ConceptSlug,
    letter: "A",
    tag: "Mission",
    title: "Documentation",
    principle: "The work is the brand",
  },
  {
    slug: "viewbook" as ConceptSlug,
    letter: "B",
    tag: "Engagement",
    title: "Viewbook",
    principle: "Tour before you tour",
  },
  {
    slug: "blocks" as ConceptSlug,
    letter: "C",
    tag: "Visual",
    title: "Blocks",
    principle: "Joy is the premium",
  },
];

export const hubCopy = {
  eyebrow: "Design directions",
  title: "Three ways to tell the same Rosslyn story",
  lede:
    "Each direction takes identical facts (seven classrooms, emergent curriculum, Freedom Park, a parent board) and commits to a different design principle. Same substance, three arguments about what a family should feel first.",
  how: "Open each one and scroll the whole page. The floating switcher moves between them.",
  open: "Open direction",
};

export const switcherCopy = {
  label: "Design directions",
  hub: "Hub",
  a: "Documentation",
  b: "Viewbook",
  c: "Blocks",
  aShort: "A",
  bShort: "B",
  cShort: "C",
};

export const guides = [
  {
    id: "dawn",
    name: "Dawn Snyder",
    title: "Executive Director",
    joined: 2023,
    quote: "Community is at the core of every intention, decision, and choice at RCC.",
    photo: "/photos/people/dawn.png",
  },
  {
    id: "antonella",
    name: "Antonella Barone",
    title: "Director of Operations",
    joined: 2014,
    quote: "Families deserve transparency on ratios, tuition, and what a real day looks like.",
    photo: "/photos/people/antonella.png",
  },
  {
    id: "curtis",
    name: "Curtis Andrews",
    title: "Education Manager",
    joined: 2008,
    quote: "Our lesson plans follow what is relevant to the children, not a calendar.",
    photo: "/photos/people/curtis.png",
  },
];

const conceptVoices: Record<
  ConceptSlug,
  {
    hero: { kicker: string; headline: string; lede: string };
    philosophyIntro: string;
    curriculumIntro: string;
  }
> = {
  documentation: {
    hero: {
      kicker: "Field notes from Rosslyn",
      headline: "The work is visible before the enrollment form.",
      lede:
        "Analog documentation, real ratios, and a community that has guided children's learning through play since 1991. See the materials, the park walks, and the teacher language that makes RCC different from a chain.",
    },
    philosophyIntro:
      "At RCC, a sense of community is not a tagline. It is how we document, decide, and show up for each child.",
    curriculumIntro:
      "Lesson plans follow what is relevant: a new puppy, a sibling, a move. Learning becomes personal when children feel heard.",
  },
  viewbook: {
    hero: {
      kicker: "Rosslyn Children's Center",
      headline: "Guiding children's learning through play.",
      lede:
        "A community of families and educators in the heart of Rosslyn. Infant through preschool, seven classrooms, and a neighborhood school since 1991.",
    },
    philosophyIntro:
      "At RCC, a sense of community is at the core of every intention, decision, and choice.",
    curriculumIntro:
      "Emergent, play-based curriculum with cooperative projects and social-emotional development at the center.",
  },
  blocks: {
    hero: {
      kicker: "Rosslyn Children's Center",
      headline: "Joy is the premium.",
      lede:
        "Seven classrooms. Four colors in the flock. Geometry and play that signal tier-one care without corporate daycare polish, for families who want identity, not a slot.",
    },
    philosophyIntro:
      "From Froebel blocks to our own four-color flock, RCC believes the simplest elements hold the most expression.",
    curriculumIntro:
      "Child-led, play-powered learning where each classroom has a name, a color, and a community.",
  },
};

export function getConceptVoice(slug: ConceptSlug) {
  return conceptVoices[slug];
}

export { business, brand };

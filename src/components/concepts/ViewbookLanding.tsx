import { LandingShell } from "./LandingShell";
import { Hero } from "@/components/sections/Hero";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { Philosophy } from "@/components/sections/Philosophy";
import { Curriculum } from "@/components/sections/Curriculum";
import { Programs } from "@/components/sections/Programs";
import { Flock } from "@/components/sections/Flock";
import { Rosslyn } from "@/components/sections/Rosslyn";
import { People } from "@/components/sections/People";
import { EnrollmentPath } from "@/components/sections/EnrollmentPath";
import { Tuition } from "@/components/sections/Tuition";
import { Voices } from "@/components/sections/Voices";
import { CareersBand } from "@/components/sections/CareersBand";
import { TourForm } from "@/components/site/TourForm";
import { ChapterRail } from "./viewbook/ChapterRail";
import { ChooseGuide } from "./viewbook/ChooseGuide";
import { Section } from "@/components/sections/Section";

export function ViewbookLanding() {
  const concept = "viewbook" as const;
  return (
    <LandingShell concept={concept}>
      <ChapterRail />
      <Hero concept={concept} />
      <ProofStrip concept={concept} />
      <Section id="guide" className="py-12">
        <ChooseGuide />
      </Section>
      <Philosophy concept={concept} />
      <Curriculum concept={concept} />
      <Programs concept={concept} />
      <Flock concept={concept} />
      <Rosslyn />
      <TourForm concept={concept} />
      <People />
      <EnrollmentPath />
      <Tuition />
      <Voices />
      <CareersBand />
    </LandingShell>
  );
}

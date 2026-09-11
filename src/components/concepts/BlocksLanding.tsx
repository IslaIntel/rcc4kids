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

export function BlocksLanding() {
  const concept = "blocks" as const;
  return (
    <LandingShell concept={concept}>
      <Hero concept={concept} />
      <ProofStrip concept={concept} />
      <Philosophy concept={concept} />
      <Curriculum concept={concept} />
      <Programs concept={concept} />
      <Flock concept={concept} />
      <Rosslyn />
      <People />
      <EnrollmentPath />
      <Tuition />
      <Voices />
      <CareersBand />
      <TourForm concept={concept} />
    </LandingShell>
  );
}

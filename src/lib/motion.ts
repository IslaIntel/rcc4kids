export const MOTION = {
  durationFast: 0.28,
  durationMid: 0.7,
  durationSlow: 0.9,
  ease: "power3.out",
  easeExpo: "expo.out",
  stagger: 0.08,
} as const;

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

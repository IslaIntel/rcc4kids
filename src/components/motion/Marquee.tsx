"use client";

import clsx from "clsx";

export function Marquee({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  const line = items.join(" · ");
  return (
    <div className={clsx("overflow-hidden border-y border-current/10 py-3", className)}>
      <div
        className="flex w-max gap-8 whitespace-nowrap text-sm tracking-wide uppercase motion-safe:animate-marquee"
        aria-hidden
      >
        <span>{line}</span>
        <span>{line}</span>
      </div>
    </div>
  );
}

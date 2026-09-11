"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";
import { business, brand } from "@/lib/copy";
import type { ConceptSlug } from "@/lib/types";
import { media } from "@/lib/media";

const links = [
  { href: "#programs", label: "Programs" },
  { href: "#philosophy", label: "Philosophy" },
  { href: "#people", label: "People" },
  { href: "#enrollment", label: "Enrollment" },
  { href: "#tuition", label: "Tuition" },
  { href: "#careers", label: "Careers" },
];

export function SiteNav({ concept }: { concept: ConceptSlug }) {
  const [open, setOpen] = useState(false);

  return (
    <header
      data-section="shell"
      className="sticky top-0 z-50 border-b border-black/5 bg-[var(--tone-paper)]/90 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <Link href={`/concepts/${concept}`} className="relative z-10 flex min-h-11 items-center">
          <Image
            src={media.logo}
            alt={brand.name}
            width={160}
            height={46}
            className="h-9 w-auto md:h-10"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[var(--tone-muted)] transition hover:text-[var(--tone-fg)]"
            >
              {l.label}
            </a>
          ))}
          <a
            href={business.portal.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--tone-muted)] transition hover:text-[var(--tone-fg)]"
          >
            Parent Login
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#tour"
            data-cta="primary"
            className="hidden min-h-11 items-center rounded-full bg-[var(--tone-accent)] px-5 text-sm font-semibold text-white md:inline-flex"
          >
            {business.ctas.primary}
          </a>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-black/10 lg:hidden"
            aria-expanded={open}
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="text-lg">{open ? "×" : "☰"}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-black/5 px-5 py-4 lg:hidden" aria-label="Mobile">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="min-h-11 py-2 text-base"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href={business.portal.url}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-11 py-2 text-base"
            >
              Parent Login
            </a>
            <a
              href="#tour"
              data-cta="primary"
              className={clsx(
                "inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--tone-accent)] px-5 font-semibold text-white"
              )}
              onClick={() => setOpen(false)}
            >
              {business.ctas.primary}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

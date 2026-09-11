import Image from "next/image";
import Link from "next/link";
import { conceptIndex, hubCopy } from "@/lib/copy";
import { media } from "@/lib/media";
import { CONCEPT_ROUTES } from "@/lib/types";

export function HubPage() {
  return (
    <div className="min-h-screen bg-[#F6F1E8] text-[#1A1A1A]">
      <header className="border-b border-black/10 px-5 py-6 md:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Image src={media.logo} alt="RCC" width={140} height={40} className="h-9 w-auto" />
          <p className="text-xs uppercase tracking-widest text-black/50">Design review</p>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-5 py-12 md:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#009040]">
          {hubCopy.eyebrow}
        </p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl md:text-5xl">{hubCopy.title}</h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-black/65">{hubCopy.lede}</p>
        <p className="mt-2 text-sm text-black/50">{hubCopy.how}</p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {conceptIndex.map((c) => (
            <Link
              key={c.slug}
              href={CONCEPT_ROUTES[c.slug]}
              className="group rounded-2xl border border-black/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="text-xs font-bold text-[#009040]">{c.letter}</span>
              <p className="mt-2 text-xs uppercase tracking-wide text-black/45">{c.tag}</p>
              <h2 className="mt-2 font-serif text-2xl">{c.title}</h2>
              <p className="mt-2 text-sm text-black/60">{c.principle}</p>
              <span className="mt-6 inline-flex text-sm font-semibold text-[#2070B0] group-hover:underline">
                {hubCopy.open} →
              </span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}

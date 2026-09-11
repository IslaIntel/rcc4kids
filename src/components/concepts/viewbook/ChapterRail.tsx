"use client";

const chapters = [
  { id: "programs", label: "Programs" },
  { id: "flock", label: "Classrooms" },
  { id: "rosslyn", label: "Campus" },
  { id: "enrollment", label: "Enrollment" },
  { id: "tour", label: "Tour" },
];

export function ChapterRail() {
  return (
    <nav
      aria-label="Viewbook chapters"
      className="sticky top-20 z-40 hidden overflow-x-auto border-b border-black/5 bg-[var(--tone-paper)]/95 py-3 backdrop-blur lg:block"
    >
      <div className="mx-auto flex max-w-6xl gap-6 px-8 text-sm">
        {chapters.map((c) => (
          <a
            key={c.id}
            href={`#${c.id}`}
            className="whitespace-nowrap text-[var(--tone-muted)] transition hover:text-[var(--tone-accent)]"
          >
            {c.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

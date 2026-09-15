import { ClipReveal } from "@/components/motion/ClipReveal";
import { business } from "@/lib/copy";
import { Section } from "./Section";

export function Tuition() {
  return (
    <Section id="tuition">
      <ClipReveal>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--tone-muted)]">
          Tuition & fees
        </p>
        <h2 className="mt-3 font-display text-3xl text-[var(--tone-fg)]">
          {business.tuition.schoolYear} · {business.tuition.schedule}
        </h2>
        <p className="mt-2 text-sm text-[var(--tone-muted)]">
          Application fee: ${business.tuition.applicationFee}
        </p>
      </ClipReveal>

      <div className="mt-8 hidden overflow-hidden rounded-xl border border-black/10 md:block">
        <table className="w-full text-left text-sm">
          <thead className="bg-[var(--tone-paper)]">
            <tr>
              <th className="px-4 py-3 font-semibold">Classroom</th>
              <th className="px-4 py-3 font-semibold">Ratio</th>
              <th className="px-4 py-3 font-semibold">Monthly</th>
            </tr>
          </thead>
          <tbody>
            {business.classrooms.map((room) => (
              <tr key={room.name} className="border-t border-black/5">
                <td className="px-4 py-3">{room.name}</td>
                <td className="px-4 py-3 text-[var(--tone-muted)]">{room.ratio}</td>
                <td className="px-4 py-3 font-medium">
                  ${room.tuitionMonthly.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 space-y-3 md:hidden">
        {business.classrooms.map((room) => (
          <div
            key={room.name}
            className="rounded-xl border border-black/10 bg-white p-4"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-display text-lg">{room.name}</p>
                <p className="text-sm text-[var(--tone-muted)]">{room.ratio}</p>
              </div>
              <p className="font-semibold">${room.tuitionMonthly.toLocaleString()}/mo</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-dashed border-black/15 bg-[var(--tone-paper)] p-5 text-sm text-[var(--tone-muted)]">
        <strong className="text-[var(--tone-fg)]">Drop-in care:</strong> ${business.dropIn.pricePerDay}/day
        (age {business.dropIn.minAge}+). Contact{" "}
        <a href={`mailto:${business.contact.dropInEmail}`} className="underline">
          {business.contact.dropInEmail}
        </a>{" "}
        for availability.
      </div>
    </Section>
  );
}

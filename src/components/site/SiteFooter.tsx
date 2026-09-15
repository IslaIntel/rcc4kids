import Image from "next/image";
import { business, brand } from "@/lib/copy";
import { media } from "@/lib/media";

export function SiteFooter() {
  return (
    <footer data-section="shell" className="border-t border-black/10 bg-[var(--tone-fg)] text-white">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src={media.logo}
              alt={brand.legalName}
              width={140}
              height={40}
              className="mb-4 h-8 w-auto brightness-0 invert"
            />
            <p className="text-sm text-white/70">{business.contact.address.full}</p>
            <p className="mt-2 text-sm text-white/70">{business.hours.licensed}</p>
          </div>
          <div>
            <p className="mb-2 text-xs uppercase tracking-widest text-white/50">Contact</p>
            <a href={`tel:${business.contact.phoneTel}`} className="block text-sm hover:underline">
              {business.contact.phone}
            </a>
            <a href={`mailto:${business.contact.email}`} className="block text-sm hover:underline">
              {business.contact.email}
            </a>
          </div>
          <div>
            <p className="mb-2 text-xs uppercase tracking-widest text-white/50">Parent portal</p>
            <a
              href={business.portal.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:underline"
            >
              {business.portal.name}
            </a>
          </div>
          <div>
            <Image
              src={media.nvMag}
              alt="Northern Virginia Magazine Best Daycares"
              width={120}
              height={120}
              className="h-16 w-auto"
            />
          </div>
        </div>
        <p className="mt-8 border-t border-white/10 pt-6 text-xs leading-relaxed text-white/60">
          {business.nondiscrimination}
        </p>
        <p className="mt-4 text-xs text-white/40">
          © {new Date().getFullYear()} {brand.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

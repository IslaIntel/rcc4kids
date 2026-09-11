import { test, expect } from "@playwright/test";
import { CONCEPTS, SECTION_IDS, conceptPath } from "./sections";
import { checkEngagement, screenshotSection, waitForSettle } from "./helpers";

const filterSection = process.env.QA_SECTION;
const filterConcept = process.env.QA_CONCEPT;

for (const concept of CONCEPTS) {
  if (filterConcept && filterConcept !== concept) continue;

  for (const sectionId of SECTION_IDS) {
    if (filterSection && filterSection !== sectionId) continue;

    test(`${concept} · ${sectionId}`, async ({ page }, testInfo) => {
      await page.goto(conceptPath(concept));
      await waitForSettle(page);

      const section = page.locator(`[data-section="${sectionId}"]`).first();
      await expect(section).toBeVisible({ timeout: 15_000 });
      await section.scrollIntoViewIfNeeded();
      await waitForSettle(page);

      const engagement = await checkEngagement(page, sectionId);
      expect(engagement.overflow, "no horizontal overflow").toBe(true);

      if (sectionId === "hero") {
        expect(engagement.ctaVisible, "primary CTA visible").toBe(true);
        expect(engagement.tapMin, "tap target size").toBe(true);
      }

      await screenshotSection(page, concept, testInfo.project.name, sectionId);
    });
  }
}

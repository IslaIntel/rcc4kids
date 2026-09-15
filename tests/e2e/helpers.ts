import type { Page } from "@playwright/test";
import { mkdirSync } from "fs";
import { join } from "path";
import type { Concept } from "./sections";

export async function waitForSettle(page: Page) {
  await page.waitForLoadState("networkidle");
  await page.waitForTimeout(600);
}

export async function assertNoOverflow(page: Page) {
  const overflow = await page.evaluate(() => {
    const el = document.documentElement;
    return el.scrollWidth > el.clientWidth + 1;
  });
  return !overflow;
}

export async function screenshotSection(
  page: Page,
  concept: Concept,
  projectName: string,
  sectionId: string
) {
  const dir = join(process.cwd(), "reports", "qa", concept, projectName);
  mkdirSync(dir, { recursive: true });
  const section = page.locator(`[data-section="${sectionId}"]`).first();
  if (await section.count()) {
    await section.screenshot({ path: join(dir, `${sectionId}.png`) });
  }
}

export async function checkEngagement(page: Page, sectionId: string) {
  const result = {
    ctaVisible: true,
    overflow: true,
    tapMin: true,
    motionOk: true,
    formOk: true,
    consoleClean: true,
  };

  result.overflow = await assertNoOverflow(page);

  if (sectionId === "hero") {
    const cta = page.locator('[data-section="hero"] [data-cta="primary"]').first();
    result.ctaVisible = await cta.isVisible();
    const box = await cta.boundingBox();
    result.tapMin = box ? box.height >= 40 : false;
  }

  if (sectionId === "tour") {
    const submit = page.locator("[data-submit-tour]").first();
    result.tapMin = (await submit.boundingBox())?.height
      ? (await submit.boundingBox())!.height >= 40
      : false;
  }

  return result;
}

import { test, expect } from "@playwright/test";
import { CONCEPTS, conceptPath } from "./sections";
import { waitForSettle } from "./helpers";

for (const concept of CONCEPTS) {
  test(`form submit · ${concept}`, async ({ page }) => {
    await page.goto(conceptPath(concept));
    await waitForSettle(page);
    await page.locator("#tour").scrollIntoViewIfNeeded();

    await page.fill('input[name="name"]', "Test Parent");
    await page.fill('input[name="email"]', "test@example.com");
    await page.selectOption('select[name="program"]', "infant");

    const [response] = await Promise.all([
      page.waitForResponse((r) => r.url().includes("/api/inquiry") && r.request().method() === "POST"),
      page.click("[data-submit-tour]"),
    ]);

    expect(response.ok()).toBeTruthy();
    const json = await response.json();
    expect(json.ok).toBe(true);
    expect(json.concept).toBe(concept);
    await expect(page.locator("[data-form-success]")).toBeVisible();
  });

  test(`switcher navigation · ${concept}`, async ({ page }) => {
    await page.goto(conceptPath(concept));
    await waitForSettle(page);
    const switcher = page.locator('[data-section="switcher"]');
    await expect(switcher).toBeVisible();
    await page.locator('[data-concept-link="hub"]').click();
    await expect(page).toHaveURL(/\/concepts$/);
  });
}

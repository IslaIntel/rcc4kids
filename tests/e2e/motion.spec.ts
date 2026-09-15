import { test, expect } from "@playwright/test";

test("reduced motion disables marquee animation", async ({ browser }) => {
  const context = await browser.newContext({
    reducedMotion: "reduce",
    viewport: { width: 1440, height: 900 },
  });
  const page = await context.newPage();
  const errors: string[] = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });

  await page.goto("/");
  await page.waitForLoadState("networkidle");

  const marqueeRunning = await page.evaluate(() => {
    const el = document.querySelector(".motion-safe\\:animate-marquee");
    if (!el) return false;
    const style = getComputedStyle(el);
    return style.animationName !== "none" && style.animationDuration !== "0s";
  });

  expect(marqueeRunning).toBe(false);
  expect(errors.filter((e) => /gsap|lenis/i.test(e))).toHaveLength(0);
  await context.close();
});

test("no console errors on homepage desktop", async ({ page }) => {
  const errors: string[] = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  await page.goto("/");
  await page.waitForLoadState("networkidle");
  await page.waitForTimeout(800);
  expect(errors.filter((e) => !/favicon/i.test(e))).toHaveLength(0);
});

import { test, expect } from "@playwright/test";

test("4. Complete to do Items", async ({ page }) => {
  test.setTimeout(120000);

  await page.goto("https://trello.com/b/4CKB2m2g/sdet-ben");
  await page.getByTestId("request-access-login-button").click();
  await page.getByPlaceholder("Enter email").fill("*");
  await page.getByRole("button", { name: "Continue" }).click();
  await page.getByPlaceholder("Enter password").fill("*");
  await page.getByRole("button", { name: "Log in" }).click();

  await page.getByRole("link", { name: "new card" }).click();
  await page.getByTestId("checklist-item-checkbox").first().click();
  await page.getByTestId("checklist-item-checkbox").nth(1).click();
});

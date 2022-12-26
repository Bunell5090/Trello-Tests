import { test, expect } from "@playwright/test";

test("5. Move to done", async ({ page }) => {
  test.setTimeout(120000);

  await page.goto("https://trello.com/b/4CKB2m2g/sdet-ben");
  await page.getByTestId("request-access-login-button").click();
  await page.getByPlaceholder("Enter email").fill("*");
  await page.getByRole("button", { name: "Continue" }).click();
  await page.getByPlaceholder("Enter password").fill("*");
  await page.getByRole("button", { name: "Log in" }).click();

  await page.getByRole("link", { name: "new card" }).click();
  await page.getByRole("link", { name: "Move" }).click();
  await page.getByRole("combobox").nth(1).selectOption("Done");
  await page.getByRole("button", { name: "Move" }).click();
});

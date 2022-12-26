import { test, expect } from "@playwright/test";

test("3. Add Checklist with items", async ({ page }) => {
  test.setTimeout(120000);

  await page.goto("https://trello.com/b/4CKB2m2g/sdet-ben");
  await page.getByTestId("request-access-login-button").click();
  await page.getByPlaceholder("Enter email").fill("*");
  await page.getByRole("button", { name: "Continue" }).click();
  await page.getByPlaceholder("Enter password").fill("*");
  await page.getByRole("button", { name: "Log in" }).click();

  await page.getByRole("link", { name: "new card" }).click();
  await page.getByRole("link", { name: "Checklist" }).click();
  await page.getByLabel("Title").fill("Check list");
  await page.locator("form").filter({ hasText: "TitleAdd" }).getByRole("button", { name: "Add" }).click();
  await page.getByPlaceholder("Add an item").fill("Item 1");
  await page.getByRole("button", { name: "Add" }).nth(2).click();
  await page.getByPlaceholder("Add an item").fill("Item 2");
  await page.getByRole("button", { name: "Add" }).nth(2).click();
});

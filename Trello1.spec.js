import { test, expect } from "@playwright/test";

test("1. Create New Card in To Do", async ({ page }) => {
  test.setTimeout(120000);

  await page.goto("https://trello.com/b/4CKB2m2g/sdet-ben");
  await page.getByTestId("request-access-login-button").click();
  await page.getByPlaceholder("Enter email").fill("*");
  await page.getByRole("button", { name: "Continue" }).click();
  await page.getByPlaceholder("Enter password").fill("*");
  await page.getByRole("button", { name: "Log in" }).click();

  await page.getByRole("link", { name: " Add a card" }).first().click();
  await page.getByPlaceholder("Enter a title for this card…").fill("new card");
  await page.getByRole("button", { name: "Add card" }).click();
  await page.getByRole("link", { name: " new card" }).click();
  await page.getByPlaceholder("Add a more detailed description…").click();
  await page.getByPlaceholder("Add a more detailed description…").fill("this is a card");
  await page.getByRole("button", { name: "Save" }).first().click();
  await page.getByRole("button", { name: "Close dialog" }).click();
});

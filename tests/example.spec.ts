import { test, expect } from '@playwright/test';

test("Verificar a pagina do google", async ({page}) => {
    await page.goto("https://www.google.com");
    await expect(page).toHaveTitle(/Google/);
})
import { test, expect } from '@playwright/test';

test('Click A/B Testing', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/');

  await page.getByText('A/B Testing').click();
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/abtest');

  //Verify text paragraph is visible
  const paragraph1 = page.locator('p');
  await expect(paragraph1).toBeVisible();

});



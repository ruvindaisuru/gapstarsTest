import { test, expect } from '@playwright/test';

test('Click A/B Testing', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/');

  await page.getByText('Checkboxes').click();
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/checkboxes');
  await expect(page.getByText('Checkboxes')).toBeVisible();

  const checkBox1 = page.locator('input[type="checkbox"]').first();
  
  //Checkbox is checked
  await checkBox1.check();
  expect(checkBox1).toBeChecked();

  //Checkbox id unchecked
  await checkBox1.uncheck();
  expect(checkBox1).not.toBeChecked();


});



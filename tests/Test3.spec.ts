import { test, expect } from '@playwright/test';

test('Click A/B Testing', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/');

  await page.getByText('Dropdown').click();

  await expect(page).toHaveURL('https://the-internet.herokuapp.com/dropdown');
  const dropdown = page.locator('#dropdown');
  await dropdown.click();
  await dropdown.selectOption('Option 2');


  //Assert dropdown has picked 2nd option in the list which is havine text 'Option 2'
  await expect(dropdown).toHaveValue('2');

});



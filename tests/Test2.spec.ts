import { test, expect } from '@playwright/test';

test('Add/Remove Elements', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/');

  await page.getByText('Add/Remove Elements').click();
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/add_remove_elements/');
  
  //Add Element
  await page.getByRole('button', { name: 'Add Element' }).click();
  const deleteButton = page.getByRole('button', { name: 'Delete' });
  //Assert delete button is getting visible
  await expect(deleteButton).toBeVisible();

  //Delete element
  await page.getByRole('button', { name: 'Delete' }).click();
  //Assert delete button is getting hidden
  await expect(deleteButton).toBeHidden();


});



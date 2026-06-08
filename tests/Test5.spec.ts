import { test, expect } from '@playwright/test';

test('Login test', async ({ page }) => {

  await page.goto('https://the-internet.herokuapp.com/');

  await page.getByText('Form Authentication').click();
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/login');
  
  //Login with correct user name  password
  await page.fill('#username','tomsmith');
  await page.fill('#password','SuperSecretPassword!');
  await page.getByRole('button', { name: 'Login' }).click();

  const validationMessage = page.locator('#flash-messages');

  await expect(validationMessage).toContainText('You logged into a secure area!');

  //Logout
  //await page.getByRole('button', { name: ' Logout' }).click();
  await page.getByRole('link',{name : 'Logout'}).click();
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/login');

  //Invalid username password
  await page.fill('#username','1tomsmith');
  await page.fill('#password','SuperSecretPassword!');
  await page.getByRole('button', { name: 'Login' }).click();
   
  await expect(validationMessage).toContainText('Your username is invalid!');


});




import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('find new car', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.navigationHome();
  });

  test('find car', async ({page}) => {
    await homePage.findCar();
    await expect(page).toHaveURL('https://www.carwale.com/new-cars/');
  });


});

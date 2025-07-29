//import { test, expect } from '@playwright/test';
//import { HomePage } from '../pages/HomePage';
//import { NewCarsPage } from '../pages/NewCarsPage';

import { test, expect } from '../utils/test-Base';

test.describe('find new car', () => {
 // let homePage: HomePage;
  //let newCarsPage: NewCarsPage;

  test.beforeEach(async ({ pages }) => {
    //homePage = new HomePage(page);
   // newCarsPage = new NewCarsPage(page);
    await pages.homePage.navigationHome();
  });

  test('find car', async ({pages}) => {
    await pages.homePage.findCar();
    await expect(pages.page).toHaveURL('https://www.carwale.com/new-cars/');
     console.log(await pages.newcarsPage.getHeaderText);
     expect(await pages.newcarsPage.getHeaderText()).toContain('New Cars');
     await pages.newcarsPage.goToBmwCar();
     await expect(pages.page).toHaveURL('https://www.carwale.com/bmw-cars/');
  });


});

import { Page } from "@playwright/test";
import { HomePage } from '../pages/HomePage';
import { NewCarsPage } from '../pages/NewCarsPage';
import {BmwPage} from '../pages/BmwPage';

export class PageFixture {
    readonly homePage: HomePage;
    readonly bmwPage: BmwPage;
    readonly newcarsPage : NewCarsPage;
    readonly page :Page;

constructor(page:Page){
    this.page=page;
    this.homePage = new HomePage(page);
    this.bmwPage = new BmwPage(page);
    this.newcarsPage = new NewCarsPage(page);

}


get basePage():Page{
    return this.page;
}












}
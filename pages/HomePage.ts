import { Locator, Page } from "@playwright/test";


export class HomePage{
private page :Page;

constructor(page:Page){
    this.page=page;
}

private newCarMenu=()=>this.page.locator('//div[normalize-space()="NEW CARS"]');
private findCarMenu=()=>this.page.locator('//div[contains(text(),"Find New Cars")]');

async navigationHome(){
    await this.page.goto('/');
}

async findCar(){
    await this.newCarMenu().waitFor({ state: 'visible' });
    await this.newCarMenu().hover();
    await this.findCarMenu().waitFor({ state: 'visible' });
    await this.findCarMenu().click();
    await this.page.waitForTimeout(2000);

}




















}
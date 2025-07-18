import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";


export class HomePage extends BasePage{


constructor(page:Page){
    super(page);
}

//private newCarMenu=()=>this.page.locator('//div[normalize-space()="NEW CARS"]');
//private findCarMenu=()=>this.page.locator('//div[contains(text(),"Find New Cars")]');

async navigationHome(){
    await this.navigateTo('/');
}

async findCar(){
    
    await this.waitElementVisible('//div[normalize-space()="NEW CARS"]');
    await this.hover('//div[normalize-space()="NEW CARS"]');
   await this.waitElementVisible('//div[contains(text(),"Find New Cars")]');
    await this.click('//div[contains(text(),"Find New Cars")]');
    await this.waitForTimeout(2000);

}




















}
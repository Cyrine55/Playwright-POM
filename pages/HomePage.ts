import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import allLocators from "../locators/locators.json";


export class HomePage extends BasePage{

private locators=allLocators.HomePage;
constructor(page:Page){
    super(page);
}

//private newCarMenu=()=>this.page.locator('//div[normalize-space()="NEW CARS"]');
//private findCarMenu=()=>this.page.locator('//div[contains(text(),"Find New Cars")]');

async navigationHome(){
    await this.navigateTo('/');
}

async findCar(){
    
    await this.waitElementVisible(this.locators.newCarMenu);
    await this.hover(this.locators.newCarMenu);
   await this.waitElementVisible(this.locators.findCarMenu);
    await this.click(this.locators.findCarMenu);
    await this.waitForTimeout(2000);

}











}
import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import allLocators from "../locators/locators.json";

export class NewCarsPage extends BasePage{
private locators=allLocators.NewCarsPage;
constructor(page:Page){
    super(page);
}


async getHeaderText () : Promise<string>{
return await this.getText(this.locators.newCarsHeading);
}

async goToBmwCar() {
await this.click(this.locators.bmwCar);
}
async goToToyotaCar() {
await this.click(this.locators.toyotaCar);
}

async goToScodaCar() {
await this.click(this.locators.scodaCar);
}

async goTohyundaiCar() {
await this.click(this.locators.hyundaiCar);
}
}
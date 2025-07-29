import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import allLocators from "../locators/locators.json";


export class BmwPage extends BasePage{

//private locators=allLocators.BmwPage;
constructor(page:Page){
    super(page);
}
}
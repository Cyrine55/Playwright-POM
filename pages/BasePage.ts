import { Page } from "@playwright/test";

export class BasePage{
public page:Page;
constructor(page:Page){
    this.page=page;
}

async navigateTo(url: string) {
    await this.page.goto(url);
  }

async waitForTimeout(timeout:number){
    await this.page.waitForTimeout(timeout);
}


  async click(locator: string) {
    await this.waitFor(locator);
    await this.page.locator(locator).click();
  }

  async fill(locator: string, value: string) {
    await this.waitFor(locator);
    await this.page.locator(locator).fill(value);
  }

  async getText(locator: string){
   return await this.page.locator(locator).innerText();
  }
async hover(locator: string){
  await this.waitFor(locator);
    await this.page.locator(locator).hover();
}

async waitElementVisible(locator: string){
    await this.page.locator(locator).waitFor({ state: 'visible' });
}

 public async waitFor(selector: string) {
    await this.page.waitForSelector(selector);
  }
}
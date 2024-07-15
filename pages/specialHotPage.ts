import { Page } from "@playwright/test";

export default class specialsHotPage {
  constructor(public page: Page) {}

  async addFirstProductToCart() {
    await this.page.hover("");
    await this.page.click("text=Add to cart");
  }
}

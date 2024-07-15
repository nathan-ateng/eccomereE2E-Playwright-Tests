import { Page } from "@playwright/test";
import { strict } from "assert";

export default class DesktopPage {
  constructor(public page: Page) {}

  async clickDestopsMenu() {
    await this.page.click("//img[@alt='Desktops']");
  }

  async addWatchToCart() {
    await this.page.hover(
      "//div[@class='carousel-item active']//img[@title='iPod Touch']",
      { strict: false }
    );
    await this.page.click(
      "button[class='btn btn-cart cart-32'] i[class='fas fa-shopping-cart']"
    );
  }
  async isToastVisible() {
    const toast = this.page.click("//a[normalize-space()='View Cart']");
    //await toast.waitFor({ state: "visible" });
  }
}

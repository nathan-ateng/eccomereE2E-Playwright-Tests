import { Page } from "@playwright/test";
export default class RegisterPage {
  constructor(public page: Page) {}
  async enterFirstName(firstname: string) {
    await this.page.locator("#input-firstname").type(firstname);
  }
  async enterLastname(lastname: string) {
    await this.page.locator("#input-lastname").type(lastname);
  }
  async enterEmail(email: string) {
    await this.page.locator("#input-email").type(email);
  }
  async enterTelephone(telephone: string) {
    await this.page.locator("#input-telephone").type(telephone);
  }
  async eneterPassword(password: string) {
    await this.page.locator("#input-password").type(password);
  }
  async confirmPassword(password: string) {
    await this.page.locator("#input-confirm").type(password);
  }
  async isSubscribeCheck() {
    return await this.page
      .locator("//label[normalize-space()='No']")
      .isChecked();
  }
  async agreeTermsandConditions() {
    await this.page.click("//label[@for='input-agree']");
  }

  async ClickContinueButtonToRegister() {
    await this.page.click("//input[@value='Continue']");
  }
}

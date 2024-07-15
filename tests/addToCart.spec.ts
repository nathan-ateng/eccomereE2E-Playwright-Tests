import { expect, test } from "@playwright/test";
import RegisterPage from "../pages/registerPage";
import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";

const email = Math.floor(Math.random() * 10).toString();
const password = "tester123";

test.describe("Register New user", async () => {
  test("Register account test_01", async ({ page }) => {
    const register = new RegisterPage(page);
    await page.goto("");
    await page.hover(
      "//a[@role='button']//span[@class='title'][normalize-space()='My account']"
    );
    await page.click("//span[normalize-space()='Register']");
    await register.enterFirstName("Tester");
    await register.enterLastname("Automation");
    await register.enterEmail(email + "@me.com");
    await register.enterTelephone("123456789");
    await register.eneterPassword(password);
    await register.confirmPassword(password);
    await register.agreeTermsandConditions();
    await register.ClickContinueButtonToRegister();

    await page.waitForTimeout(3000);
    // expect(register.isSubscribeCheck()).toBe

    // Assert that asscount has been created
    expect(
      page.locator("//h1[normalize-space()='Your Account Has Been Created!']")
    ).toHaveText("Your Account Has Been Created!");

    // Continue to newly created account
    await page.click("//a[normalize-space()='Continue']");

    // Expect to be directed to new "My Account" page
    await expect(page).toHaveTitle("My Account");
  });
});

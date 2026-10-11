import{test,expect} from '@playwright/test'

test('Validation page assertion', async({page}) =>{
    await page.goto('https://leafground.com/input.xhtml');
    await page.waitForLoadState('domcontentloaded');

    //Validate a Disabled Textbox
    await expect (page.locator('(//div[@class="col-12"]//input[@role="textbox"])[3]')).toBeDisabled();

    //Validate an Enabled Textbox
    await expect(page.locator('//div[@class="col-12"]//input[@placeholder="Babu Manickam"]')).toBeEnabled();
    page.locator('//div[@class="col-12"]//input[@placeholder="Babu Manickam"]').fill('Kalai');

    //Soft Assertion Practice
    await expect(page.locator('(//div[@class="col-12"]//input[@role="textbox"])[2]')).toBeDisabled();

    //Fill Data
    page.locator('//div[@class="col-12"]//input[@value="Chennai"]').fill('UK');

    

})
import{test,expect} from '@playwright/test'


test('loginPage with xpath', async({page}) =>{
await page.goto("https://leaftaps.com/opentaps/control/main");
await page.waitForLoadState('domcontentloaded');

await page.locator('//input[@id="username"]').fill('DemoCSR');
await page.locator('//input[@id="password"]').fill('crmsfa');
await page.locator('//input[@class="decorativeSubmit"]').click();

const pagetitle = await page.title();
console.log("Page title is" + pagetitle);

const pageurl = await page.url();
console.log("Page url is" + pageurl);

// Wait until CRM/SFA is visible
//await expect(page.locator('//div[@id="label"]')).toBeVisible();

// Click after it becomes visible
// await page.locator('//div[@id="label"]').click();





})
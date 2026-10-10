import {test} from '@playwright/test'

test('Print all dropdown values', async({page}) =>{

    await page.goto('https://leaftaps.com/opentaps/control/main');
    await page.waitForLoadState('domcontentloaded');

    await page.locator('#username').fill('DemoCSR');
    await page.locator('#password').fill('crmsfa');
    await page.locator('.decorativeSubmit').click();
    await page.locator("//*[@id='button']").click();
    await page.locator("//a[text()='Create Lead']").click();
 
    await page.waitForLoadState('domcontentloaded');  
    
 //wait till the dropdown element is visisble
const dropdown = page.locator("select[name='industryEnumId']");
await dropdown.waitFor({ state: 'visible', timeout: 10000 });
//locate all the options inside the dropdown
const option = dropdown.locator('option');

//const sel = page.locator("select[name='industryEnumId'] > option");
const dropdownCount = await option.count();

//iterate throught the dropwdown options and print all the text and value from the dropdown
console.log("Total dropdown option count is : "+ dropdownCount);
for (let i = 0; i < dropdownCount; i++) {
   const text = await option.nth(i).innerText();
    const value = await option.nth(i).getAttribute('value');

    console.log(text+ "  |  " +value);

}
    })
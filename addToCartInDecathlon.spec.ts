import {test,expect} from '@playwright/test'

test('Search product, apply filters, add to cart in Decathlon',async({page}) =>{

    await page.goto("https://www.decathlon.in/");
    await page.waitForLoadState('domcontentloaded');
    
    // Verify the user is navigated to the Decathlon home page.
    const pagetitle = await page.title();
    console.log(pagetitle);
    expect (page.getByText('All Sports')).toBeVisible();

    //search product shoes and press enter
//expect (page.getByRole('searchbox', {name :'Search for 60+ sports and 6,000+ products'}).isEnabled());
//await page.getByRole('searchbox', {name :'Search for 60+ sports and 6,000+ products'}).fill('shoes');

//await page.getByRole('searchbox', {name :'Search for 60+ sports and 6,000+ products'}).

expect (page.getByRole('searchbox').isEnabled());

await page.getByRole('searchbox').fill('Shoes');

await page.getByRole('searchbox').press('Enter');

expect (page.getByLabel('Minimum')).toBeVisible();

await page.waitForTimeout(5000);
 const srchpagetitle = await page.title();
    console.log(srchpagetitle);

    const srchtitle = "Search | Shoes";
    if(srchpagetitle === srchtitle){
        console.log("page title is matched");
        
    }else{
        console.log("page title does not match Search | shoes");
        
    }

    // 10.Click on the "Running"/"Trainers" category filter. 11. Click on the "Men" gender filter. 12. Click on the shoe size filter "UK 10.5".

    expect (page.getByText('Category').isVisible());
    await page.getByText('Category').click();

//page. getByRole('button', { name: 'Submit' });
    expect (page.getByRole('checkbox',{name : 'Trainers 29'}).isVisible)
    await page.getByRole('checkbox',{name : 'Trainers 29'}).click();

expect (page.getByRole('checkbox',{name : 'Trainers 29'}).isChecked());

//14.Select "Price: Low to High" from the sorting options. 15. Click on the first product from the displayed product list.
await page.getByRole('button',{name : 'Most relevant'}).click();

expect (page.getByRole('option', {name: 'Price (low → high)'}).isVisible());
await page.getByRole('option', {name: 'Price (low → high)'}).click();

//16. Click on the first product from the displayed product list.
expect (page.getByRole('img',{name : 'Lightweight & Breathable One Many Shoes - Black'})).toBeVisible();
await page.getByRole('img',{name : 'Lightweight & Breathable One Many Shoes - Black'}).click();
// Select the shoe size "UK 10.5 - EU 45" on the product detail page.
expect (page.getByRole('button',{name : 'Select size UK 10.5'})).toBeVisible();
await page.getByRole('button',{name : 'Select size UK 10.5'}).click();

//17. Click on the "Add to Cart" button.

expect (page.getByRole('button',{name : 'Add to cart'})).toBeEnabled();
await page.getByRole('button',{name : 'Add to cart'}).click();

//heading Product(s) added to cart
/*Before clicking "Add to Cart Button"- Used webpage freeze by adding "Allow pasting" in console and then "setTimeout(()=>{debugger},4000)" enter -it freezes the screen
 for 4000ms and then inspect the element*/
expect(page.getByRole('heading',{name:'Product(s) added to cart'})).toBeVisible();
let ordermessage = await page.getByRole('heading',{name:'Product(s) added to cart'}).textContent();
console.log(ordermessage);


//18. Click on the Cart option. 19. Fetch the total cart value. 20. Print the total cart amount in the console.
expect (page.getByRole('link',{name:'Cart'})).toBeVisible();
await page.getByRole('link',{name:'Cart'}).click();

expect (page.locator("//p[contains(text(),'₹799')]")).toBeVisible();
let amt = await page.locator("//p[contains(text(),'₹799')]").textContent();
console.log("Total amount is : " + amt);



})
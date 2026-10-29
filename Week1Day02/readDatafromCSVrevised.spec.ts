import { test, expect } from '@playwright/test';
import { parse } from 'csv-parse/sync';
import fs from 'fs';

const value : any = parse(
    fs.readFileSync('Data/leaf.csv', 'utf-8'),
    {
        columns: true,
        skip_empty_lines: true
    }
);

test.describe('Salesforce login tests', () => {
    for (const credentials of value) {
        test(`Login test ${credentials.tcid}`, async ({ page }) => {
            await page.goto('https://login.salesforce.com/');

            await page.locator('#username')
                .fill(credentials.username);

            await page.locator('#password')
                .fill(credentials.password);

            await page.locator('#Login').click();

            // Replace with a reliable success locator
            await expect(page).toHaveURL(/lightning\.force\.com/);
        });
    }
});
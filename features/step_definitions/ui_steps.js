const { Given, When , Then, AfterAll } = require('@cucumber/cucumber');
const { Builder, By, Capabilities, Key } = require('selenium-webdriver');
const assert = require('assert');

require("chromedriver");

const capabilities = Capabilities.chrome();
capabilities.set('chromeOptions', { "w3c": false });
const driver = new Builder().withCapabilities(capabilities).build();

Given('I am on the Google search page', async function () {
    await driver.get('https://www.google.com');
    await driver.sleep(2000);
});

When('I search for {string}', async function (searchTerm) {
    const element = await driver.findElement(By.name('q'));
    element.sendKeys(searchTerm, Key.RETURN);
    await driver.sleep(2000);
})

Then('the page title should start with {string}', {timeout: 60 * 1000}, async function (searchTerm) {
    await driver.sleep(2000);
    const title = await driver.getTitle();
    const isTitleStartWithCheese = title.toLowerCase().lastIndexOf(`${searchTerm}`, 0) === 0;
    assert.equal(isTitleStartWithCheese, true);
})

AfterAll(async function () {
    if (driver) {
        await driver.quit();
    }
})
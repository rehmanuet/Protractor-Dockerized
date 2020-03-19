import {beforeEach, describe} from "selenium-webdriver/testing";

let textUtils = require('../helpers/textUtils');
let hotel = require('../helpers/helper');
describe('Search the Hotel', function () {
    beforeEach(async () => {
        browser.driver.ignoreSynchronization = true;
        await browser.waitForAngularEnabled(false);
        await browser.get(textUtils.URL_3);
    });
    it('should set the dates', async () => {
        await hotel.hotel_page.startSearch()
        await hotel.hotel_page.setDate()
        await hotel.hotel_page.endSearch()
    });
});
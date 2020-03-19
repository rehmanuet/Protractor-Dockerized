var obj = require('../pom/pom_tc1')
var obj1 = require('../pom/pom_tc2')
var obj2 = require('../pom/pom_tc4')
var textUtils = require('../helpers/textUtils');
var home_page = {
    login: function (u1, pass, u2) {
        obj.userNameField().sendKeys(u1);
        obj.userPassInput().sendKeys(pass);
        obj.user2NameInput().sendKeys(u2);
        obj.loginSubmit().click();
    },
    verifyInvalid: function () {
        var actualValue = obj.invalidVerify().getText();
        return actualValue;
    },
    verifyValid: function () {
        var actualValue = obj.validVerify().get(2).getText();
        return actualValue;
    }
}
var add_user = {
    addUser: function (FN, LN, UN, custType, cellNo) {
        obj1.user_page.addButton().click()
        obj1.user_page.firstNameField().sendKeys(FN);
        obj1.user_page.lastNameField().sendKeys(LN);
        obj1.user_page.userNameField().sendKeys(UN);
        if (custType == 'Company AAA') {
            obj1.user_page.custTypeRadio(0).click();
        } else if (custType == 'Company BBB') {
            obj1.user_page.custTypeRadio(1).click();
        }
        obj1.user_page.roleDropdown().click();
        obj1.user_page.cellInput().sendKeys(cellNo);
        obj1.user_page.saveButton().click();
    },
    verifyAddedUser: function (FN, LN) {
        var actualFullName = FN + " " + LN
        expect(actualFullName).toEqual(obj1.verify_add_user_page.getName());
    }
}
var update_user = {
    updateUser: function (UN) {
        obj1.update_user_page.editUser().click();
        obj1.user_page.firstNameField().clear().sendKeys(UN);
        obj1.user_page.saveButton().click();
    }
}
var hotel_page = {
    startSearch: async () => {
        await obj2.origin().isDisplayed()
        await obj2.firstDate().isDisplayed()
        await obj2.lastDate().isDisplayed()
        expect(obj2.guestText().getText()).toEqual('1 room, 2 guests');
        await browser.sleep(3000)
        await obj2.origin().sendKeys("     " + textUtils.destination)
        await browser.sleep(3000)
        await obj2.origin().sendKeys(protractor.Key.ENTER);
        await obj2.origin().sendKeys(protractor.Key.TAB);
    },
    setDate: async () => {
        var destination_date = await obj2.firstDate()
        await browser.sleep(3000)
        await destination_date.clear()
        await browser.sleep(3000)
        var date1 = await obj2.formatingDates(obj2.startDate())
        await browser.sleep(3000)
        await destination_date.sendKeys(date1);
        await destination_date.sendKeys(protractor.Key.TAB);
        await destination_date.sendKeys(protractor.Key.TAB);
        var arrival_date = await obj2.lastDate()
        await arrival_date.clear()
        await browser.sleep(3000)
        var date2 = await obj2.formatingDates(obj2.endDate())
        await arrival_date.sendKeys(date2);
        await browser.sleep(3000)
    },
    endSearch: async () => {
        await obj2.searchButton().click()
        await browser.sleep(2000)
    }
}
module.exports = {
    home_page,
    add_user,
    update_user,
    hotel_page
};
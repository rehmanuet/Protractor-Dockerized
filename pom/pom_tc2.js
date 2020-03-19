var user_page = {
    addButton: function () {
        return element(by.css('.icon-plus'));
    },
    firstNameField: function () {
        return element(by.name('FirstName'));
    },
    lastNameField: function () {
        return element(by.name('LastName'));
    },
    userNameField: function () {
        return element(by.name('UserName'));
    },
    userPassInput: function () {
        return element(by.model('Auth.user.password'));
    },
    custTypeRadio: function (option) {
        return element.all(by.name("optionsRadios")).get(option);
    },
    roleDropdown: function () {
        element(by.name("RoleId")).click();
        return element(by.css("[value='1']"));
    },
    emailInput: function () {
        return element.all(by.css(".ng-scope"));
    },
    cellInput: function () {
        return element(by.name('Mobilephone'));
    },
    saveButton: function () {
        return element(by.css('.btn-success'));
    }
}
var verify_add_user_page = {
    getName: async function () {
        var expectedFirstName = await element.all(by.css(".smart-table-data-cell")).get(0).getText();
        var expectedLastName = await element.all(by.css(".smart-table-data-cell")).get(1).getText();
        var expectedFullName = expectedFirstName + " " + expectedLastName;
        return expectedFullName;
    }
}
var update_user_page = {
    editUser: function () {
        return element.all(by.css(".btn-link")).get(1);
    },
    updateName: function () {
        return element(by.name('FirstName'));
    },
}
module.exports = {
    user_page,
    verify_add_user_page,
    update_user_page
};
var user_login_page = {
    userNameField: function () {
        return element(by.model('Auth.user.name'));
    },
    userPassInput: function () {
        return element(by.model('Auth.user.password'));
    },
    user2NameInput: function () {
        return element(by.model('model[options.key]'));
    },
    loginSubmit: function () {
        return element(by.css('.btn-danger'));
    },
    validVerify: function () {
        return element.all(by.css(".ng-scope"));
    },
    invalidVerify: function () {
        return element(by.css('.alert-danger'));
    }
}
module.exports = user_login_page;
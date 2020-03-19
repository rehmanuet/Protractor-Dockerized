// _____        _          _____                _     _           
//|  __ \      | |        |  __ \              (_)   | |          
//| |  | | __ _| |_ __ _  | |__) | __ _____   ___  __| | ___ _ __ 
//| |  | |/ _` | __/ _` | |  ___/ '__/ _ \ \ / / |/ _` |/ _ \ '__|
//| |__| | (_| | || (_| | | |   | | | (_) \ V /| | (_| |  __/ |   
//|_____/ \__,_|\__\__,_| |_|   |_|  \___/ \_/ |_|\__,_|\___|_|   

var textUtils = require('../helpers/textUtils');
var addPage = require('../helpers/helper');
var using = require('jasmine-data-provider');
describe('Adding users with Data Provider', function () {
    beforeEach(function () {
        browser.get(textUtils.URL_2);
    });

    function plusProvider() {
        return [{
            a: "User1",
            b: "User1a"
        }, {
            a: "User2",
            b: "User2b"
        },];
    }

    using(plusProvider, function (data) {
        it('should add user via data provider', function () {
            addPage.add_user.addUser(data.a, data.b, textUtils.UN, textUtils.custType, textUtils.cellNo);
            addPage.add_user.verifyAddedUser(data.a, data.b);
        });
    });
});
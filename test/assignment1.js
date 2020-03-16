//  ______ _                           _     _                     _             
// |  ____| |                         | |   | |                   | |            
// | |__  | | ___ _ __ ___   ___ _ __ | |_  | |     ___   ___ __ _| |_ ___  _ __ 
// |  __| | |/ _ \ '_ ` _ \ / _ \ '_ \| __| | |    / _ \ / __/ _` | __/ _ \| '__|
// | |____| |  __/ | | | | |  __/ | | | |_  | |___| (_) | (_| (_| | || (_) | |   
// |______|_|\___|_| |_| |_|\___|_| |_|\__| |______\___/ \___\__,_|\__\___/|_|   

var textUtils = require('../helpers/textUtils');
var homePage = require('../helpers/helper');
describe('Launch the website', function () {
    beforeEach(function () {
        browser.get(textUtils.URL_1);
    });
    it('should login with valid credential', function () {
        homePage.home_page.login("angular", "password", "angular");
        expect(homePage.home_page.verifyValid()).toMatch(textUtils.actualValidMessage_1);
    });
    it('should login with invalid credential and verify the error message', function () {
        homePage.home_page.login("angular1111111", "password111", "angular111");
        expect(homePage.home_page.verifyInvalid()).toMatch(textUtils.actualInvalidMessage_1);
    });
});
//       _                     _              ______                                           _    
//      | |                   (_)            |  ____|                                         | |   
//      | | __ _ ___ _ __ ___  _ _ __   ___  | |__ _ __ __ _ _ __ ___   _____      _____  _ __| | __
//  _   | |/ _` / __| '_ ` _ \| | '_ \ / _ \ |  __| '__/ _` | '_ ` _ \ / _ \ \ /\ / / _ \| '__| |/ /
// | |__| | (_| \__ \ | | | | | | | | |  __/ | |  | | | (_| | | | | | |  __/\ V  V / (_) | |  |   < 
//  \____/ \__,_|___/_| |_| |_|_|_| |_|\___| |_|  |_|  \__,_|_| |_| |_|\___| \_/\_/ \___/|_|  |_|\_\

var textUtils = require('../helpers/textUtils');
var addPage = require('../helpers/helper');
describe('Launch the website', function () {
    beforeEach(function () {
        browser.get(textUtils.URL_2);
    });
    it('should add new Test User with required information', async function () {
        addPage.add_user.addUser(textUtils.FN, textUtils.LN, textUtils.UN, textUtils.custType, textUtils.cellNo);
        addPage.add_user.verifyAddedUser(textUtils.FN, textUtils.LN);
    });
    it('should update the First Name with Mark', async function () {
        addPage.add_user.addUser(textUtils.FN, textUtils.LN, textUtils.UN, textUtils.custType, textUtils.cellNo);
        addPage.update_user.updateUser("Mark");
        addPage.add_user.verifyAddedUser("Mark", textUtils.LN);
    });
});
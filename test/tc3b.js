//   _____        _          _____                _     _              ________  
//  |  __ \      | |        |  __ \              (_)   | |            / /  _ \ \ 
//  | |  | | __ _| |_ __ _  | |__) | __ _____   ___  __| | ___ _ __  | || |_) | |
//  | |  | |/ _` | __/ _` | |  ___/ '__/ _ \ \ / / |/ _` |/ _ \ '__| | ||  _ <| |
//  | |__| | (_| | || (_| | | |   | | | (_) \ V /| | (_| |  __/ |    | || |_) | |
//  |_____/ \__,_|\__\__,_| |_|   |_|  \___/ \_/ |_|\__,_|\___|_|    | ||____/| |

var textUtils = require('../helpers/textUtils');
var addPage = require('../helpers/helper');
var using = require('jasmine-data-provider');
var pd = require('../helpers/dataprovider');
describe('Adding users with Data Provider', function () {
    beforeEach(function () {
        browser.get(textUtils.URL_2);
    });
    using(pd.dataProvider.dp(), function (data) {
        it('should add user via data provider', function () {
            addPage.add_user.addUser(data.F_N, data.L_N, textUtils.UN, textUtils.custType, textUtils.cellNo);
            addPage.add_user.verifyAddedUser(data.a, data.b);
        });
    });
});
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
/**
 * Utility class for commonly called Protractor.browser methods.
 * The methods should be static and
 * not require new instance of class to use.
 *
 * @export
 * @class BrowserUtil
 */
class BrowserUtil {
    constructor() {
    }
    /**
     * Returns environment the test suite is executed on
     * by checking `browser.params.baseUrl`.
     *
     * @static
     * @returns {Environment}
     * @memberof BrowserUtil
     */
    static getEnv() {
        const baseUrl = protractor_1.browser.params.baseUrl;
        if (baseUrl.indexOf('qaenvurl') != -1) {
            return Environment.QA;
        }
        else if (baseUrl.indexOf('prodenvurl') != -1) {
            return Environment.PROD;
        }
        else {
            return Environment.LOCAL;
        }
    }
}
/**
 * Returns true, if element displayed
 * Max timeout for wait: 1200000 second`.
 *
 * @static
 * @memberof BrowserUtil
 */
BrowserUtil.waitUntilReady = function (elm) {
    protractor_1.browser.wait(function () {
        return elm.isPresent();
    }, 1200000);
    protractor_1.browser.wait(function () {
        return elm.isDisplayed();
    }, 1200000);
};
BrowserUtil.waitUntilNotInDom = function (locator) {
    var EC = protractor_1.protractor.ExpectedConditions;
    protractor_1.browser.wait(function () {
        return EC.stalenessOf(locator);
    }, 600000);
    protractor_1.browser.wait(function () {
        return EC.invisibilityOf(locator);
    }, 600000);
};
exports.BrowserUtil = BrowserUtil;
/**
 * Enum for different types of environment this test suite
 * is running on.
 *
 * @export
 * @enum {string}
 */
var Environment;
(function (Environment) {
    Environment["QA"] = "qa";
    Environment["PROD"] = "prod";
    Environment["LOCAL"] = "local";
})(Environment = exports.Environment || (exports.Environment = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci51dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdXRpbHMvYnJvd3Nlci51dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQStGO0FBRS9GOzs7Ozs7O0dBT0c7QUFDSDtJQUNJO0lBQ0EsQ0FBQztJQTJCRDs7Ozs7OztPQU9HO0lBQ0gsTUFBTSxDQUFDLE1BQU07UUFDVCxNQUFNLE9BQU8sR0FBRyxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFFdkMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUM7UUFDMUIsQ0FBQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztRQUM1QixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztRQUM3QixDQUFDO0lBQ0wsQ0FBQzs7QUEzQ0Q7Ozs7OztHQU1HO0FBQ0ksMEJBQWMsR0FBRyxVQUFVLEdBQUc7SUFDakMsb0JBQU8sQ0FBQyxJQUFJLENBQUM7UUFDVCxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzNCLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNaLG9CQUFPLENBQUMsSUFBSSxDQUFDO1FBQ1QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM3QixDQUFDLEVBQUUsT0FBTyxDQUFFLENBQUM7QUFDakIsQ0FBQyxDQUFDO0FBQ0ssNkJBQWlCLEdBQUcsVUFBVSxPQUFPO0lBQ3hDLElBQUksRUFBRSxHQUFHLHVCQUFVLENBQUMsa0JBQWtCLENBQUM7SUFDdkMsb0JBQU8sQ0FBQyxJQUFJLENBQUM7UUFDVCxNQUFNLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDWCxvQkFBTyxDQUFDLElBQUksQ0FBQztRQUNULE1BQU0sQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNmLENBQUMsQ0FBQztBQTNCTixrQ0FnREM7QUFFRDs7Ozs7O0dBTUc7QUFDSCxJQUFZLFdBSVg7QUFKRCxXQUFZLFdBQVc7SUFDbkIsd0JBQVMsQ0FBQTtJQUNULDRCQUFhLENBQUE7SUFDYiw4QkFBZSxDQUFBO0FBQ25CLENBQUMsRUFKVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQUl0QiJ9
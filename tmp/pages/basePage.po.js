"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
/**
 * Class representing generic page.
 * Methods/properties for global elements should go here.
 *
 * @export
 * @class BasePage
 */
class BasePage {
    constructor() { }
    singUpButton() {
        return protractor_1.element(protractor_1.by.css('div a.margin-0.btn.btn-info:nth-child(3)'));
    }
    loginButton() {
        return protractor_1.element(protractor_1.by.css('div a.margin-0.btn.btn-info:nth-child(2)'));
    }
}
exports.BasePage = BasePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZVBhZ2UucG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlcy9iYXNlUGFnZS5wby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFzRTtBQUV0RTs7Ozs7O0dBTUc7QUFDSDtJQUNFLGdCQUFlLENBQUM7SUFFZCxZQUFZO1FBQ1IsTUFBTSxDQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVELFdBQVc7UUFDUCxNQUFNLENBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDBDQUEwQyxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDO0NBQ0o7QUFWRCw0QkFVQyJ9
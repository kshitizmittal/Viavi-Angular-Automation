"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const basePage_po_1 = require("./basePage.po");
/**
 * Class representing generic page.
 * Methods/properties for global elements should go here.
 *
 * @export
 * @class loginPage
 */
class loginPage extends basePage_po_1.BasePage {
    loginPageHeader() {
        return protractor_1.element(protractor_1.by.xpath('.//*[@id=\'validate-form\']/h2[1]'));
    }
    userNameTextBox() {
        return protractor_1.element(protractor_1.by.xpath('/html/body/user-app/ng-component/div[2]/form/div[5]/div/input'));
    }
    userPasswordTextBox() {
        return protractor_1.element(protractor_1.by.xpath('/html/body/user-app/ng-component/div[2]/form/div[6]/div/input'));
    }
    loginSubmitButton() {
        return protractor_1.element(protractor_1.by.id('.btn btn-primary btn-block btn-lg'));
    }
    /**
     * Opens global header's Institutional Sign In modal and
     * signs in using specified username/password.
     *
     * @param {string} username Username to login as
     * @param {string} password Password to login as
     */
    login(loginData) {
        const usernameInput = protractor_1.element(protractor_1.by.name('username'));
        const passwordInput = protractor_1.element(protractor_1.by.name('password'));
        const submitButton = protractor_1.element(protractor_1.by.id('.btn btn-primary btn-block btn-lg'));
        usernameInput.sendKeys(loginData.username);
        passwordInput.sendKeys(loginData.password);
        submitButton.click();
    }
    /**
     * Navigates browser to a page on Xplore,
     * using baseUrl from params passed in.
     * Should use relative URL (eg '/Xplore/home.jsp').
     *
     * @param {string} relativeUrl Path of URL after the host (eg '/Xplore/home.jsp').
     * @memberof BasePage
     */
    navigateTo(relativeUrl) {
        protractor_1.browser.get(protractor_1.browser.params.baseUrl + relativeUrl);
    }
}
exports.loginPage = loginPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5QYWdlLnBvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZXMvbG9naW5QYWdlLnBvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQW9FO0FBQ3BFLCtDQUF1QztBQUV2Qzs7Ozs7O0dBTUc7QUFDSCxlQUF1QixTQUFRLHNCQUFRO0lBRW5DLGVBQWU7UUFDWCxNQUFNLENBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsZUFBZTtRQUNYLE1BQU0sQ0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsK0RBQStELENBQUMsQ0FBQyxDQUFDO0lBQzlGLENBQUM7SUFFRCxtQkFBbUI7UUFDZixNQUFNLENBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLCtEQUErRCxDQUFDLENBQUMsQ0FBQztJQUM5RixDQUFDO0lBRUQsaUJBQWlCO1FBQ2IsTUFBTSxDQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILEtBQUssQ0FBQyxTQUFTO1FBQ1gsTUFBTSxhQUFhLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDbkQsTUFBTSxhQUFhLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDbkQsTUFBTSxZQUFZLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDLENBQUMsQ0FBQztRQUN6RSxhQUFhLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQyxhQUFhLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSCxVQUFVLENBQUMsV0FBbUI7UUFDMUIsb0JBQU8sQ0FBQyxHQUFHLENBQUMsb0JBQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Q0FDSjtBQTdDRCw4QkE2Q0MifQ==
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const basePage_po_1 = require("./basePage.po");
/**
 * Class representing generic page.
 * Methods/properties for global elements should go here.
 *
 * @export
 * @class BasePage
 */
class registrationPage extends basePage_po_1.BasePage {
    getRegistrationHeader() {
        return protractor_1.element(protractor_1.by.css('#validate-form h2:nth-child(1)'));
    }
    userTypeArtist() {
        return protractor_1.element(protractor_1.by.css('#uniform-user_type-0>span'));
    }
    userFirstName() {
        return protractor_1.element(protractor_1.by.id("user_first_name"));
    }
    userLastName() {
        return protractor_1.element(protractor_1.by.id("user_last_name"));
    }
    userEmail() {
        return protractor_1.element(protractor_1.by.id("user_email"));
    }
    userPassword() {
        return protractor_1.element(protractor_1.by.id("user_password"));
    }
    userConfirmPassword() {
        return protractor_1.element(protractor_1.by.id("user_rpassword"));
    }
    userAggrement() {
        return protractor_1.element(protractor_1.by.id("accept_aggrement"));
    }
    createUserButton() {
        return protractor_1.element(protractor_1.by.id("bttnsubmit"));
    }
    alertMessage() {
        return protractor_1.element(protractor_1.by.css(".alert.alert-error"));
    }
    /**
     * Opens global header's Institutional Sign In modal and
     * signs in using specified username/password.
     *
     * @param {string} username Username to login as
     * @param {string} password Password to login as
     */
    registerUser(registrationData) {
        this.userTypeArtist().click();
        this.userFirstName().sendKeys(registrationData.firstname);
        this.userLastName().sendKeys(registrationData.lastname);
        this.userEmail().sendKeys(registrationData.useremail);
        this.userPassword().sendKeys(registrationData.password);
        this.userConfirmPassword().sendKeys(registrationData.cpassword);
        this.userAggrement().click();
        this.createUserButton().click();
    }
}
exports.registrationPage = registrationPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXJQYWdlLnBvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZXMvcmVnaXN0ZXJQYWdlLnBvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQW9FO0FBQ3BFLCtDQUF1QztBQUV2Qzs7Ozs7O0dBTUc7QUFDSCxzQkFBOEIsU0FBUSxzQkFBUTtJQUUxQyxxQkFBcUI7UUFDakIsTUFBTSxDQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELGNBQWM7UUFDVixNQUFNLENBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsYUFBYTtRQUNULE1BQU0sQ0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxZQUFZO1FBQ1IsTUFBTSxDQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELFNBQVM7UUFDTCxNQUFNLENBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELFlBQVk7UUFDUixNQUFNLENBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELG1CQUFtQjtRQUNmLE1BQU0sQ0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxhQUFhO1FBQ1QsTUFBTSxDQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELGdCQUFnQjtRQUNaLE1BQU0sQ0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQsWUFBWTtRQUNSLE1BQU0sQ0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxZQUFZLENBQUMsZ0JBQWdCO1FBQ3pCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDcEMsQ0FBQztDQUNKO0FBM0RELDRDQTJEQyJ9
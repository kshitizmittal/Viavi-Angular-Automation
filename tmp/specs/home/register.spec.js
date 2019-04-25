"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const loginPage_po_1 = require("./../../pages/loginPage.po");
const registerPage_po_1 = require("./../../pages/registerPage.po");
describe('User registration', () => {
    const registrationData = require('../../../data/registration.json');
    const loginPg = new loginPage_po_1.loginPage();
    const registrationPg = new registerPage_po_1.registrationPage();
    beforeEach(() => {
        protractor_1.browser.waitForAngularEnabled(false);
    });
    it('should not able to register with invalid details', (done) => {
        loginPg.navigateTo('/');
        loginPg.loginButton().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Not able to navigate to application home page');
            loginPg.loginButton().click().then(function () {
                loginPg.loginPageHeader().isDisplayed().then(function (pre) {
                    expect(dis).toBe(true, 'Application login page is not displaying');
                    registrationPg.singUpButton().click().then(function () {
                        registrationPg.registerUser(registrationData.registration);
                        expect(registrationPg.alertMessage().isDisplayed()).toBe(true, 'Validation error is not displaying');
                        done();
                    });
                });
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NwZWNzL2hvbWUvcmVnaXN0ZXIuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFvRTtBQUNwRSw2REFBcUQ7QUFDckQsbUVBQStEO0FBRy9ELFFBQVEsQ0FBQyxtQkFBbUIsRUFBRTtJQUMxQixNQUFNLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0lBQ3BFLE1BQU0sT0FBTyxHQUFHLElBQUksd0JBQVMsRUFBRSxDQUFDO0lBQ2hDLE1BQU0sY0FBYyxHQUFHLElBQUksa0NBQWdCLEVBQUUsQ0FBQztJQUU5QyxVQUFVLENBQUM7UUFDUCxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pDLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGtEQUFrRCxFQUFFLENBQUMsSUFBSTtRQUN4RCxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHO1lBQ2xELE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLCtDQUErQyxDQUFDLENBQUM7WUFDeEUsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQztnQkFDL0IsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUc7b0JBQ3RELE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLDBDQUEwQyxDQUFDLENBQUM7b0JBQ25FLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0JBQ3ZDLGNBQWMsQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUM7d0JBQzNELE1BQU0sQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLG9DQUFvQyxDQUFDLENBQUM7d0JBQ3JHLElBQUksRUFBRSxDQUFDO29CQUNYLENBQUMsQ0FBQyxDQUFBO2dCQUNOLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUMifQ==
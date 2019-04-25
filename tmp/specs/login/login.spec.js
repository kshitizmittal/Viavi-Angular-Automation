"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const loginPage_po_1 = require("./../../pages/loginPage.po");
const browser_util_1 = require("../../utils/browser.util");
const dataProvider_1 = require("../../data/dataProvider");
describe('Login - Thejamstop.com', () => {
    const loginData = require('../../../data/login.json');
    let loginPg;
    beforeEach(() => {
        loginPg = new loginPage_po_1.loginPage();
        protractor_1.browser.waitForAngularEnabled(false);
    });
    afterEach(() => {
    });
    it('should able to login with valid credentials', (done) => {
        loginPg.navigateTo('/');
        let dataObj = dataProvider_1.dataProvider.getJsonData("./data/login.json", "login");
        console.log(dataObj);
        loginPg.login(loginData.login);
        browser_util_1.BrowserUtil.waitUntilReady(loginPg.loginButton());
        loginPg.loginButton().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Not able to navigate to application home page');
            loginPg.loginButton().click().then(function () {
                loginPg.loginPageHeader().isDisplayed().then(function (pre) {
                    console.log("Performing login");
                    expect(dis).toBe(true, 'Application login page is not displaying');
                    loginPg.login(loginData.login);
                    done();
                });
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NwZWNzL2xvZ2luL2xvZ2luLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBb0U7QUFDcEUsNkRBQXFEO0FBQ3JELDJEQUFxRDtBQUNyRCwwREFBcUQ7QUFFckQsUUFBUSxDQUFDLHdCQUF3QixFQUFFO0lBQy9CLE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBQ3RELElBQUksT0FBa0IsQ0FBQztJQUV2QixVQUFVLENBQUM7UUFDUCxPQUFPLEdBQUcsSUFBSSx3QkFBUyxFQUFFLENBQUM7UUFDMUIsb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QyxDQUFDLENBQUMsQ0FBQztJQUVILFNBQVMsQ0FBQztJQUVWLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDZDQUE2QyxFQUFFLENBQUMsSUFBSTtRQUNuRCxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLElBQUksT0FBTyxHQUFHLDJCQUFZLENBQUMsV0FBVyxDQUFDLG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxDQUFBO1FBQ3BFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDcEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsMEJBQVcsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUE7UUFDakQsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUc7WUFDbEQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsK0NBQStDLENBQUMsQ0FBQztZQUN4RSxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDO2dCQUMvQixPQUFPLENBQUMsZUFBZSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRztvQkFDdEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO29CQUMvQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSwwQ0FBMEMsQ0FBQyxDQUFDO29CQUNuRSxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDL0IsSUFBSSxFQUFFLENBQUM7Z0JBQ1gsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQyJ9
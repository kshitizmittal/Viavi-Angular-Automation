import {browser, element, ExpectedConditions, by} from 'protractor';
import {loginPage} from './../../pages/loginPage.po';
import {BrowserUtil} from "../../utils/browser.util";
import {dataProvider} from "../../data/dataProvider";

describe('Login - Thejamstop.com', () => {
    const loginData = require('../../../data/login.json');
    let loginPg: loginPage;

    beforeEach(() => {
        loginPg = new loginPage();
        browser.waitForAngularEnabled(false);
    });

    afterEach(() => {

    });

    it('should able to login with valid credentials', (done) => {
        loginPg.navigateTo('/');
        let dataObj = dataProvider.getJsonData("./data/login.json", "login")
        console.log(dataObj)
        loginPg.login(loginData.login);
        BrowserUtil.waitUntilReady(loginPg.loginButton())
        loginPg.loginButton().isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Not able to navigate to application home page');
            loginPg.loginButton().click().then(function () {
                loginPg.loginPageHeader().isDisplayed().then(function (pre) {
                    console.log("Performing login")
                    expect(dis).toBe(true, 'Application login page is not displaying');
                    loginPg.login(loginData.login);
                    done();
                });
            });
        });
    })
});
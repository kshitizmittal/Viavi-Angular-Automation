"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Because this file imports from `protractor` npm package, 
// you'll need to have it as a project dependency. 
//
// `baseUrl` property is passed in as a param
const protractor_1 = require("protractor");
const jasmine_spec_reporter_1 = require("jasmine-spec-reporter");
exports.config = {
    allScriptsTimeout: 110000,
    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome'
    },
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 150000,
        print: function () { }
    },
    // Keep max browsers running to 1 because
    // multiple browsers running at once was pausing/failing for no reason
    maxSessions: 1,
    // You could set no globals to true to avoid jQuery '$' and protractor '$'
    // collisions on the global namespace.
    noGlobals: true,
    onPrepare: () => {
        // Use `jasmine-spec-reporter` as the spec result reporter
        jasmine.getEnv().addReporter(new jasmine_spec_reporter_1.SpecReporter({ spec: { displayStacktrace: true } }));
        // Set browser window width to 1200 and height to 900px
        protractor_1.browser.driver.manage().window().setSize(1200, 900);
    },
    params: {
        baseUrl: 'https://ra.globallogic.com/login'
    },
    // specs: [ 'specs/**/*spec.js' ],
    //   specs: [ 'specs/**/login.spec.js' ],
    specs: ['specs/**/login.spec.js'],
    seleniumAddress: 'http://localhost:4444/wd/hub'
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw0REFBNEQ7QUFDNUQsbURBQW1EO0FBQ25ELEVBQUU7QUFDRiw2Q0FBNkM7QUFDN0MsMkNBQTZDO0FBQzdDLGlFQUFxRDtBQUUxQyxRQUFBLE1BQU0sR0FBVztJQUMxQixpQkFBaUIsRUFBRSxNQUFNO0lBQ3pCLFNBQVMsRUFBRSxTQUFTO0lBQ3BCLFlBQVksRUFBRTtRQUNaLFdBQVcsRUFBRSxRQUFRO0tBQ3RCO0lBQ0QsZUFBZSxFQUFFO1FBQ2YsVUFBVSxFQUFFLElBQUk7UUFDaEIsc0JBQXNCLEVBQUUsTUFBTTtRQUM5QixLQUFLLEVBQUUsY0FBWSxDQUFDO0tBQ3JCO0lBRUQseUNBQXlDO0lBQ3pDLHNFQUFzRTtJQUN0RSxXQUFXLEVBQUUsQ0FBQztJQUVkLDBFQUEwRTtJQUMxRSxzQ0FBc0M7SUFDdEMsU0FBUyxFQUFFLElBQUk7SUFFZixTQUFTLEVBQUU7UUFDVCwwREFBMEQ7UUFDMUQsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLG9DQUFZLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUV0Rix1REFBdUQ7UUFDdkQsb0JBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBQ0QsTUFBTSxFQUFFO1FBQ0osT0FBTyxFQUFFLGtDQUFrQztLQUM5QztJQUNGLGtDQUFrQztJQUNsQyx5Q0FBeUM7SUFFdEMsS0FBSyxFQUFFLENBQUUsd0JBQXdCLENBQUU7SUFFckMsZUFBZSxFQUFFLDhCQUE4QjtDQUNoRCxDQUFDIn0=
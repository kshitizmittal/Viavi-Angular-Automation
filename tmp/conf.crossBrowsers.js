"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conf_1 = require("./conf");
// Modify browsers used for testing
conf_1.config.capabilities = undefined;
conf_1.config.multiCapabilities = [
    { 'browserName': 'chrome' },
    { 'browserName': 'firefox' }
];
// Use modifed base log4js.json as protractor log4js.json
exports.config = conf_1.config;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5jcm9zc0Jyb3dzZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29uZi5jcm9zc0Jyb3dzZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsaUNBQTZDO0FBRTdDLG1DQUFtQztBQUNuQyxhQUFVLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztBQUNwQyxhQUFVLENBQUMsaUJBQWlCLEdBQUc7SUFDN0IsRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFDO0lBQ3pCLEVBQUMsYUFBYSxFQUFFLFNBQVMsRUFBQztDQUMzQixDQUFDO0FBRUYseURBQXlEO0FBQzlDLFFBQUEsTUFBTSxHQUFXLGFBQVUsQ0FBQyJ9
const { test } = require('@playwright/test');



exports.test = test.extend({
    testdataforOrder: async ({}, use) => {
        await use({
            username: "rahulshettyacademy",
            password: "learning"
        });
    },
    testdataforPayment: async ({}, use) => {
        await use({
            username: "rahulshettyacademy",
            password: "learning"
        });
    },
    testdataforReceipt: async ({}, use) => {
        await use({
            username: "rahulshettyacademy",
            password: "learning"
        });
    }
});
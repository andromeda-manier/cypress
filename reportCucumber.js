const reportCucumber = require('multiple-cucumber-html-reporter');

reportCucumber.generate({
    jsonDir: 'cypress/reports-cucumber',
    reportPath: 'cypress/reports-cucumber',
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Sygeforsikring Danmark'},
            {label: 'Release', value: 'PI0'},
        ]
    },
    metadata:{
        browser: {
            name: 'Chrome',
            version: '87'
        },
        device: "AnT's machine",
        platform: {
            name: 'Windows',
            version: 'Enterprise'
        }
    }
});

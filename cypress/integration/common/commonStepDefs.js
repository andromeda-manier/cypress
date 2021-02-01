import {Then, Given, And} from "cypress-cucumber-preprocessor/steps";

Then(/^I see "([^"]*)" in the title$/, pageTitle => {
    cy.title().should("include", pageTitle)
});

Given(/^I open homepage$/, function () {
    cy.log('Opening default homepage');
    cy.visit('/');
});

Given(/^I connect to the database$/, function () {
    cy.sqlServer("select * from authors").then(result => {
       cy.log(result[1][1])
    });
});

And(/^I connect to postgres db "([^"]*)"$/, attribute => {
    cy.postgreSQL(`SELECT * FROM audit LIMIT 5`).then(queryResponse => {
        cy.log('Query response: ', new Map(Object.entries(queryResponse)).get(attribute))
    });
});
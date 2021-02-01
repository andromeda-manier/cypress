import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const url = "https://www.github.com";

Given(`I open GitHub page`, () => {
    cy.visit(url);
});

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const url = "https://bitbucket.org/product/";

Given(`I open Bitbucket page`, () => {
    cy.visit(url);
});

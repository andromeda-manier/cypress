import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import {GooglePage} from '../../../pages/dEPages/';

const googlePage = new GooglePage();

const url = "https://www.google.com";

Given(`I open Google page`, () => {
    cy.visit(url);
});

Given(/^I search for "([^"]*)"$/, title => {
    cy.get(googlePage.searchBox).type(title + '{enter}');
});

Then(/^I should see "([^"]*)" results$/, results => {
    cy.get(googlePage.searchResult).should('contains.text', results)
});

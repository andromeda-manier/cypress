@pi0
Feature: Portal
  I want to open Portal

  Background:
    Given I open homepage

  @regression
  Scenario: Opening portal page
    Given I open Google page
    Then I see "Google" in the title
    When I search for "Sygeforsikring danmark"
    Then I should see "228.000" results

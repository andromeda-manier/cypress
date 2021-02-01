Feature: Connect to sql-server db

  Background:
    Given I open homepage

  Scenario: Verify data from database
    Given I connect to the database
    And I connect to postgres db "audit_code"
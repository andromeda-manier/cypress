# Cypress Automation Framework for Sygeforsikring 'Danmark' project

1.Test execution

    To setup Cypress, be ensure that your machine has Node.js 10 or 12 and above  

    - to open Cypress:
        npx cypress open

    - to run specific tests:
        cypress run --headed --spec "/path_of_tests"

    - to run with environment parameters:
        cypress run --headed --spec "/path_of_tests" --env configFile=<dev|qa|stage> 


2.Results Report

    After running the test build the test results report will be in:
	    cypress/report-mocha
        cypress/report-cucumber

    After running the test build the screenshots for failed cases will be in:
        cypress/screenshots

    After running the test build the video for test execution will be in:
        cypress/videos


3.Test Data

    Test data will be in:
	    cypress/fixtures






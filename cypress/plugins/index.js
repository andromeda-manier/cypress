/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const cucumber = require('cypress-cucumber-preprocessor').default;
const fs = require('fs-extra');
const path = require('path');
const sqlServer = require('cypress-sql-server');
const postgreSQL = require('cypress-postgresql');
const pg = require('pg');

module.exports = (on, config) => {
   const pathToConfigFile = path.resolve('./cypress/config', `${config.env.configFile || 'dev'}.json`)
   function getConfigurationByFile () {
      return fs.readJson(pathToConfigFile)
   }
   // SQL Server
   dba = sqlServer.loadDBPlugin(fs.readJsonSync(pathToConfigFile, 'utf-8').env.db)
   on('task', dba);
   // Postgres Server
   const pool = new pg.Pool(fs.readJsonSync(pathToConfigFile, 'utf-8').env.db);
   dbp = postgreSQL.loadDBPlugin(pool);
   on('task', dbp);
   // Cucumber
   on('file:preprocessor', cucumber())
   // Browser
   on('before:browser:launch', (browser = {}, launchOptions) => {
      if (browser.name === 'chrome') {
         // launchOptions.args.push('--start-fullscreen')
         launchOptions.args.push('--incognito')
         return launchOptions
      }
   })
   return getConfigurationByFile()
}

/// <reference types="cypress" />
/// <reference types="@shelex/cypress-allure-plugin" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************
/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars

const allureWriter = require('@shelex/cypress-allure-plugin/writer');
// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

//For reading config files
const fs = require('fs-extra');
const path = require('path');

function getConfigurationByFile(file) {
    const pathToConfigFile = path.resolve(
        '..',
        'Repo-B/cypress/config-files',
        `${file}.json`
    );

    return fs.readJson(pathToConfigFile);
}


module.exports = (on, config) => {
    const file = config.env.configFile || 'qa';
    allureWriter(on, config);

    return getConfigurationByFile(file);
}

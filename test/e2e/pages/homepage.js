'use strict';

const assert = require('assert');
let Homepagelements = require('../constants/homepage.constants.js');

module.exports = class Homepage {
    launchwebsite () {
        browser.url('/');
    }

    verifytitle() {
        const title = browser.getTitle();
        assert.strictEqual(title, Homepagelements.expectedtitle);
    }
}
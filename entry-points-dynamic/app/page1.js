/**
 * Specific entry point for the home page.
 * "page2" and "page3" are not part of the bundle!
 */

require('x-page1');

var app = require('app');
app.init('page1');

/* global ko: false */
ko.applyBindings(app.getViewModel());

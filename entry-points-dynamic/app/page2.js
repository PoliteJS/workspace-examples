/**
 * Specific entry point for "page2".
 * "page1" and "page3" are not part of the bundle!
 */

require('x-page2');

var app = require('app');
app.init('page2');

/* global ko: false */
ko.applyBindings(app.getViewModel());

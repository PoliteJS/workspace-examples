/**
 * Specific entry point for "page3".
 * "page1" and "page2" are not part of the bundle!
 */

require('x-page3');

var app = require('app');
app.init('page3');

/* global ko: false */
ko.applyBindings(app.getViewModel());

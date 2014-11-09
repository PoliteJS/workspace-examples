/**
 * Monolithic Single Page Application
 * ==================================
 * 
 * This app loads all the required modules here in the main entry point.
 * 
 */

// Knockout Components (for pages contents)
require('x-page1');
require('x-page2');
require('x-page3');

// Main App (router & global view model)
var app = require('app');
app.init('page1');

/* global ko: false */
ko.applyBindings(app.getViewModel());

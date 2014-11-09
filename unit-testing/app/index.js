/**
 * Unit Testing Example
 * ====================
 * 
 * This app implements a simple calculator utility which is able
 * to resolve matematical expression (yes, that's a thing!)
 *
 * To do that we use 2 UI modules which show the input panel and the
 * expression hystory. Those are "application" modules.
 *
 * The real core of the app is a "domain" module which is responsible
 * of solving the problem and communicate the outcome.
 *
 * Here there are "real stuff" which can contain horrible mistakes... so it is
 * a "save my ass" strategy to secure it's implementation with some unit tests!
 * 
 */

var ko = require('ko');

// Knockout Components (for pages contents)
require('x-calc');
require('x-history');

// Initialize the (only) domain feature
require('calc').init();

ko.applyBindings();

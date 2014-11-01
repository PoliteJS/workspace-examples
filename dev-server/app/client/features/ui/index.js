/**
 * Ui is an "application feature" because it's core responsiblity is
 * the user interaction: show data, react to click event.
 *
 * it uses a domain feature (colors) to gather data and sub-features
 * to implement data into proper HTML items.
 */
var colors = require('colors');

var populateList = require('./populate-list');
var populateDetails = require('./populate-details');

exports.init = function() {
    populateList.init();
    populateDetails.init();
    colors.getList(populateList.run);
};

exports.details = populateDetails.run;

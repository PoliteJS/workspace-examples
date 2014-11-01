/**
 * This module is a nice wrapper around a third party ajax library.
 * 
 * Single Responsibility Principle:
 * here we implement the knowledge of the data end point urls
 */

var pegasus = require('pegasus');

exports.colors = function(callback) {
    pegasus('/colors').then(callback, function(err) {
        console.log('Error loading colors', err);
    });
};

exports.color = function(colorId, callback) {
    pegasus('/colors/' + colorId).then(function(data) {
        callback(data.shift());
    }, function(err) {
        console.log('Error loading color', colorId, err);
    });
};

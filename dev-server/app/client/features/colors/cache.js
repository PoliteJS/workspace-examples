/**
 * Cache Layer
 * it avoids to load the same color twice
 *
 * this implementation is also called "repository"
 * - http://msdn.microsoft.com/en-us/library/ff649690.aspx
 */

var fetch = require('./fetch');
var colors;

exports.init = function() {
    colors = {};
};

exports.add = function(color) {
    colors[color.id] = color;
};

exports.getById = function(colorId, callback) {
    if (colors[colorId]) {
        console.log(colorId, 'has been loaded from cache');
        return callback(colors[colorId]);
    }
    fetch.color(colorId, function(color) {
        if (color) {
            console.log(colorId, 'has been loaded from a remote server');
            exports.add(color);
            callback(color);
        } else {
            console.log('Color not found', colorId);
        }
    });
};

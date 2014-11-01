/**
 * Colors is a "domain feature".
 * It's only responsibility is deal with data: 
 * 
 * - retrieve from a remote server
 * - cache in live memory
 * - expose a simple API
 *
 * here in the entry point our concern is to load the sub-features
 * and to expose the feature API.
 *
 * No logic should be here!
 */

var cache = require('./cache');
var fetch = require('./fetch');

exports.init = function() {
    cache.init();
};

exports.getList = fetch.colors;

exports.getById = cache.getById;

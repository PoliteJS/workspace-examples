/**
 * This is a single responsibility implementation of the communication ability.
 *
 * It is a really simple wrapper around the `jqb-subscribable` component which
 * is installed ad NPM depndency.
 */

var subscribable = require('jqb-subscribable');

var channel;

exports.init = function() {
    channel = subscribable.create();
};

exports.publish = function(expr, res) {
    if (res === false) {
        channel.emit('error', expr);
    } else {
        channel.emit('success', expr, res);
    }
};

exports.on = function(evt, callback) {
    return channel.on(evt, callback);
};

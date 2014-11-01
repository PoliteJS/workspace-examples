/**
 * This is a "domain module", it deal only with a simple business rule
 * which is the execution of a given expression.
 *
 * It has also the ability to publish messages through a pub/sub mechanism.
 *
 * Here it is a strict implementation of the Single Responsibility Principle
 * so the "real stuff" is implemented into specific sub-modules.
 *
 * The responsibility of this specific file is to coordinate sub-modules and
 * offer the public API of the "calc" module.
 */

var subscribable = require('jqb-subscribable');

var runner = require('./runner');
var channel = require('./channel');

exports.init = function() {
    channel.init();
};

/**
 * The implementation is "asynchronous ready" so all the application
 * will be modeled as the real calculation is done with an external service.
 *
 * This is a general good behavior when writing "domain modules" because
 * even if you switch the module to be really async you application will
 * work without any problem.
 */
exports.runExpression = function(expr, callback) {
    var res = runner(expr);
    channel.publish(expr, res);
    if (typeof callback === 'function') {
        callback(res);
    }
};

exports.on = channel.on;


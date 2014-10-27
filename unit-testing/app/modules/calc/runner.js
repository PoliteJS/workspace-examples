/**
 * This is a single responsibility implementation of the very core of the module.
 *
 * Here we try to run the expression and we only care to return the
 * correct value: [result | false]
 */

module.exports = function(expr) {
    try {
        return (new Function('return ' + expr))();
    } catch(e) {
        return false;
    }
};

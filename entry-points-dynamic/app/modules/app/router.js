/**
 * Each routing action perform an **asyncronous require** then change the page
 * only when the relative package is available to the script.
 *
 * A package which is already downloaded - or cached by the browser - is not 
 * downloaded twice!
 *
 * There is an amazing way to optimize this behavior using resource prefetching:
 * <link rel="prefetch" href="resource.js">
 */

var router = require('jqb-router');

exports.init = function(setPage) {
    router.init({
        '/': function() {
            require(['x-page1'], function() {
                setPage('page1');
            });
        },
        '/page2': function() {
            require(['x-page2'], function() {
                setPage('page2');
            });
        },
        '/page3': function() {
            require(['x-page3'], function() {
                setPage('page3');
            });
        },
    });
};

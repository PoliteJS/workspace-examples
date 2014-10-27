
var router = require('jqb-router');

exports.init = function(setPage) {
    router.init({
        '/': function() {
            setPage('page1');
        },
        '/page2': function() {
            setPage('page2');
        },
        '/page3': function() {
            setPage('page3');
        },
    });
};


var calc = require('calc');

module.exports = {
    init: function() {
        this.items = ko.observableArray();
        
        this.hasItems = ko.computed(function() {
            return this.items().length > 0;
        }, this);
        
        // subscribe to "calc" events to feed the hystory
        var handler = createHandler(this);
        calc.on('success', handler);
        calc.on('error', handler);
    },
    clear: function() {
        this.items.removeAll();
    }
};

function createHandler(vm) {
    return function(expression, result) {
        vm.items.push({
            expression: expression,
            result: Math.round(result * 100) / 100,
            isError: result === undefined,
            isSuccess: result !== undefined
        });
    };
};

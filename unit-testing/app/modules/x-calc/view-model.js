
var calc = require('calc');

module.exports = {
    init: function() {
        this.expression = ko.observable('');
        this.hasError = ko.observable(false);
        
        this.isSubmitDisabled = ko.computed(function() {
            return this.expression().length === 0;
        }, this);
        
        this.expression.subscribe(function() {
            this.hasError(false);
        }, this);
    },
    calculate: function() {
        var self = this;
        calc.runExpression(this.expression(), function(result) {
            if (!result) {
                self.hasError(true);
            }
        });
    }
};

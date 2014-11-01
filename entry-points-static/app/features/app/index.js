
var AppViewModel = require('./view-model');
var router = require('./router');

this.init = function(page) {
    var vm = this.viewModel = new AppViewModel(page);
    router.init(vm.page);
};

this.getViewModel = function() {
    return this.viewModel;
};

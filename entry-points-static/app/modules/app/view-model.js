module.exports = App;

function App(pageName) {
    this.page = ko.observable(pageName);
    this.pageCmp = ko.computed(function() {
        return 'x-' + this.page();
    }, this);
}

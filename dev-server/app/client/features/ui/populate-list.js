
var ui = require('./index');
var target;

exports.init = function() {
    target = document.getElementById('colors-list');
};

exports.run = function(data) {
    data.forEach(function(item) {
        target.appendChild(createListItem(item));
    });
};

function createListItem(item) {
    var el = document.createElement('li');
    el.dataset.id = item.id;
    el.innerHTML = item.name;
    el.addEventListener('click', clickHandler);
    return el;
}
                        
function clickHandler() {
    ui.details(this.getAttribute('data-id'));
}
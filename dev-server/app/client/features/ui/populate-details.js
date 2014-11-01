
var colors = require('colors');
var template = require('./details.html');

var target;

exports.init = function() {
    target = document.getElementById('color-details');
};

exports.run = function(id) {
    colors.getById(id, populateDom);
};

function populateDom(item) {
    target.innerHTML = template
        .replace('{name}', item.name)
        .replace('{id}', item.id);
}

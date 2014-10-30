/**
 * This module uses an HTML template and jQuery to build a dynamic modal
 * window, the modal is animated by a Twitter Bootstrap plugin
 */

var $ = require('jquery');
var template = require('./template.html');

exports.show = function(modalTitle, modalContent) {
    // create a brand new DOM modal from a template:
    var $modal = $(template);
    
    // clean DOM after closing the modal:
    $modal.on('hidden.bs.modal', function() {
        $(this).remove();
    });
    
    // customise modal's content:
    $modal.find('.modal-title').html(modalTitle);
    $modal.find('.modal-body').html(modalContent);
    
    // finally display it!
    $modal.modal();
};
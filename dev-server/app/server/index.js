/**
 * This little development server integration uses a dummy data provider (json)
 * to expose two endpoints API to access the full color list and a single color by id.
 */

var dummyData;

exports.init = function(server, app, config) {
    app.get('/colors', fetchColors);
    app.get('/colors/:id', fetchColorById);
};

function lazyLoadData() {
    if (!dummyData) {
        dummyData = require('./dummy-data.json');
    }
}

function fetchColors(req, res) {
    lazyLoadData();
    res.json(dummyData);
}

function fetchColorById(req, res) {
    lazyLoadData();
    res.json(dummyData.filter(function(item) {
        return req.params.id === item.id;
    })).shift();
}

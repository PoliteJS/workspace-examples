var koComponents = require('jqb-ko-component');
koComponents.register(
    'x-history',
    require('raw!./template.html'),
    require('./view-model')
);
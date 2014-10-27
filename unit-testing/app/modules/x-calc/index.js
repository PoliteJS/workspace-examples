var koComponents = require('jqb-ko-component');
koComponents.register(
    'x-calc',
    require('raw!./template.html'),
    require('./view-model')
);
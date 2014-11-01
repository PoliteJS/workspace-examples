var koComponents = require('jqb-ko-component');
koComponents.register(
    'x-calc',
    require('./template.html'),
    require('./view-model')
);
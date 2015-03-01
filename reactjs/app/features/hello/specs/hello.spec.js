
var React = require('react/addons');
var HelloWorld = require('../hello.jsx');

describe('HelloWorld', function() {

    it('should render', function() {
        var tg = React.addons.TestUtils.renderIntoDocument(<HelloWorld />);
        expect(tg.getDOMNode().innerHTML).to.contain('Hello World');
    });

});

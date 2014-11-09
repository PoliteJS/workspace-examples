/**
 * This unit test perform agains the overall module through its public API.
 * 
 * we reach a 100% of code coverage even if the module is splitted into sub-modules.
 * 
 * Actually my first implementation of the module was a monolithic `index.js`, after
 * writing this test I begun to refactor my code into single responsibility module.
 */

var subscribable = require('jqb-subscribable');
var calc = require('../index');

describe('calc', function() {
    
    beforeEach(function() {
        calc.init();
    });
    
    it('should run a correct expression', function(done) {
        calc.runExpression('1 + 1', function(result) {
            expect(result).to.equal(2);
            done();
        });
    });
    
    it('should fail an invalid expression', function(done) {
        calc.runExpression('a + b', function(result) {
            expect(result).to.be.false;
            done();
        });
    });
    
    it('should communicate successful executions', function(done) {
        calc.on('success', function() {
            done();
        });
        calc.runExpression('1 + 1');
    });
    
    it('should communicate unsuccessfull executions', function(done) {
        calc.on('error', function() {
            done();
        });
        calc.runExpression('a + b');
    });
    
});

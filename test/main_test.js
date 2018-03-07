var expect = require('chai').expect;

//Test suite
describe('Mocha ', function() {
    //Test spec (unit test)
    it('should run our tests using npm', function() {
        expect(false).to.be.false;
    });

    it('should test another mocha test', function() {
        expect("String").to.be.equal("String");
    });
});
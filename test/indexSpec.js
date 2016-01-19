var should = require('chai').should();
var func = require('../index.js');
var return42 = func.return42;

describe('#return42', function(){
  it('returns an integer 42', function() {
    return42().should.equal(42);
  });
});


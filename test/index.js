var invert = require('../');

require('should');

describe('invert-obj', function () {
  
  it('should invert an object given to it, swapping keys and values', function () {

    var inverted = invert({
      one: 'two', 
      3: 'four',
      'five': 6
    });

    inverted.should.have.property('two', 'one');
    inverted.should.have.property('four', '3');
    inverted.should.have.property(6, 'five');

  });

});
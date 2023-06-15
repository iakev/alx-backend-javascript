const calculateNumber = require('./0-calcul');
const assert = require('assert');

describe('calculateNumber', function() {
  it('should round arguments and return the sum of them', function () {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it('should round one argument and return the sum of them', function () {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it('should round both arguments correctly and return the sum of them', function () {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it('should round both arguments correctly and return the sum of them', function () {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
  it('should round negative arguments and return the sum of them', function () {
    assert.equal(calculateNumber(-2.5, 5.6), 4);
  });
  it('should round zero-valued negative arguments and return the sum of them', function () {
    assert.equal(calculateNumber(-0.5, -5.6), -6);
  });
  it('should round zero arguments and return the sum of them', function () {
    assert.equal(calculateNumber(0, 0), 0);
  });
});

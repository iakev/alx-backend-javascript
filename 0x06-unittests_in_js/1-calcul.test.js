const calculateNumber = require('./1-calcul');
const assert = require('assert');

describe('calculateNumber', function() {
  describe('#SUM', function() {
    it('should round arguments and return the sum of them', function () {
      assert.equal(calculateNumber('SUM', 1, 3), 4);
    });
    it('should round one argument and return the sum of them', function () {
      assert.equal(calculateNumber('SUM', 1, 3.7), 5);
    });
    it('should round both arguments correctly and return the sum of them', function () {
      assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
    });
    it('should round both arguments correctly and return the sum of them', function () {
      assert.equal(calculateNumber('SUM', 1.5, 3.7), 6);
    });
    it('should round negative arguments and return the sum of them', function () {
      assert.equal(calculateNumber('SUM', -2.5, 5.6), 4);
    });
    it('should round zero-valued negative arguments and return the sum of them', function () {
      assert.equal(calculateNumber('SUM', -0.5, -5.6), -6);
    });
    it('should round zero arguments and return the sum of them', function () {
      assert.equal(calculateNumber('SUM', 0, 0), 0);
    });
  });
  describe('#SUBTRACT', function() {
    it('should round arguments and return the difference', function () {
      assert.equal(calculateNumber('SUBTRACT', 14, 3), 11);
    });
    it('should round arguments and return the correct difference', function () {
      assert.equal(calculateNumber('SUBTRACT', 1, 3), -2);
    });
    it('should round negative arguments and return the correct difference', function () {
      assert.equal(calculateNumber('SUBTRACT', -1, -3), 2);
    });
    it('should round decimal arguments and return the correct difference', function () {
      assert.equal(calculateNumber('SUBTRACT', 14.3, 3.7), 10);
    });
    it('should round one decimal arguments and return the correct difference', function () {
      assert.equal(calculateNumber('SUBTRACT', 1.5, 3), -1);
    });
    it('should round arguments and return the correct difference', function () {
      assert.equal(calculateNumber('SUBTRACT', 1, 3), -2);
    });
    it('should round negative arguments and return the correct difference', function () {
      assert.equal(calculateNumber('SUBTRACT', -10.3, -30.6), 21);
    });
    it('should round zero valued arguments and return the correct difference', function () {
      assert.equal(calculateNumber('SUBTRACT', 0, 0), 0);
    });
  });
  describe('#DIVIDE', function(){
    it('should round arguments and return the quotient', function () {
      assert.equal(calculateNumber('DIVIDE', 24, 3), 8);
    });
    it('should round decimal arguments and return the quotient', function () {
      assert.equal(calculateNumber('DIVIDE', 23.7, 2.8), 8);
    });
    it('should round arguments and return Error for divide by 0', function () {
      assert.equal(calculateNumber('DIVIDE', 24, 0), 'Error');
    });
    it('should round zero dividied arguments', function () {
      assert.equal(calculateNumber('DIVIDE', 0.1, 3), 0);
    });
    it('should round negative arguments and return the quotient', function () {
      assert.equal(calculateNumber('DIVIDE', -24, -3), 8);
    });
    it('should round arguments and return the correct quotient', function () {
      assert.equal(calculateNumber('DIVIDE', -23.7, 2.8), -8);
    });
    it('should round arguments and return the correct quotient', function () {
      assert.equal(calculateNumber('DIVIDE', -23.7, -2.8), 8);
    });
    it('should round all zero arguments and return the correct quotient', function () {
      assert.equal(calculateNumber('DIVIDE', 0, 0), 'Error');
    });
  });
});

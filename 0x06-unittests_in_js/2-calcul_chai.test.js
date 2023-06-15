const calculateNumber = require('./1-calcul');
const expect = require('chai').expect;

describe('calculateNumber', function() {
  describe('#SUM', function() {
    it('should round arguments and return the sum of them', function () {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });
    it('should round one argument and return the sum of them', function () {
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    });
    it('should round both arguments correctly and return the sum of them', function () {
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    });
    it('should round both arguments correctly and return the sum of them', function () {
      expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
    });
    it('should round negative arguments and return the sum of them', function () {
      expect(calculateNumber('SUM', -2.5, 5.6)).to.equal(4);
    });
    it('should round zero-valued negative arguments and return the sum of them', function () {
      expect(calculateNumber('SUM', -0.5, -5.6)).to.equal(-6);
    });
    it('should round zero arguments and return the sum of them', function () {
      expect(calculateNumber('SUM', 0, 0)).to.equal(0);
    });
  });
  describe('#SUBTRACT', function() {
    it('should round arguments and return the difference', function () {
      expect(calculateNumber('SUBTRACT', 14, 3)).to.equal(11);
    });
    it('should round arguments and return the correct difference', function () {
      expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
    });
    it('should round negative arguments and return the correct difference', function () {
      expect(calculateNumber('SUBTRACT', -1, -3)).to.equal(2);
    });
    it('should round decimal arguments and return the correct difference', function () {
      expect(calculateNumber('SUBTRACT', 14.3, 3.7)).to.equal(10);
    });
    it('should round one decimal arguments and return the correct difference', function () {
      expect(calculateNumber('SUBTRACT', 1.5, 3)).to.equal(-1);
    });
    it('should round arguments and return the correct difference', function () {
      expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
    });
    it('should round negative arguments and return the correct difference', function () {
      expect(calculateNumber('SUBTRACT', -10.3, -30.6)).to.equal(21);
    });
    it('should round zero valued arguments and return the correct difference', function () {
      expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
    });
  });
  describe('#DIVIDE', function(){
    it('should round arguments and return the quotient', function () {
      expect(calculateNumber('DIVIDE', 24, 3)).to.equal(8);
    });
    it('should round decimal arguments and return the quotient', function () {
      expect(calculateNumber('DIVIDE', 23.7, 2.8)).to.equal(8);
    });
    it('should round arguments and return Error for divide by 0', function () {
      expect(calculateNumber('DIVIDE', 24, 0)).to.equal('Error');
    });
    it('should round zero dividied arguments', function () {
      expect(calculateNumber('DIVIDE', 0.1, 3)).to.equal(0);
    });
    it('should round negative arguments and return the quotient', function () {
      expect(calculateNumber('DIVIDE', -24, -3)).to.equal(8);
    });
    it('should round arguments and return the correct quotient', function () {
      expect(calculateNumber('DIVIDE', -23.7, 2.8)).to.equal(-8);
    });
    it('should round arguments and return the correct quotient', function () {
      expect(calculateNumber('DIVIDE', -23.7, -2.8)).to.equal(8);
    });
    it('should round all zero arguments and return the correct quotient', function () {
      expect(calculateNumber('DIVIDE', 0, 0)).to.equal('Error');
    });
  });
});

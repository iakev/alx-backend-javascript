const chai = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function (){
  let calculateNumber = {};
  let print = {};
  beforeEach(function() {
    calculateNumber = sinon.stub(Utils, 'calculateNumber').returns(10);
    print = sinon.spy(console, 'log');
  });
  this.afterEach(function() {
    calculateNumber.restore();
    print.restore();
  })
  it('validates Utils function called once', function() {
    sendPaymentRequestToApi(100, 20);
    chai.expect(calculateNumber.calledOnce).to.be.true;
  });
  it('validates arguments called in Utils function', function(){
    sendPaymentRequestToApi(100, 20);
    chai.expect(calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
  });
  it('validates return value of Utils function', function() {
    sendPaymentRequestToApi(100, 20);
    chai.expect(calculateNumber.returnValues[0]).to.be.equal(10);
  });
  it('validates that console.log is logging correct message', function(){
    sendPaymentRequestToApi(100, 20);
    chai.expect(print.calledWith('The total is: 10')).to.be.true;
  })
});

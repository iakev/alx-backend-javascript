const chai = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

expect = chai.expect;
describe('sendPaymentRequestToApi', function (){
  let calculateNumber = {};
  beforeEach(function() {
    calculateNumber = sinon.spy(Utils, 'calculateNumber');
  });
  this.afterEach(function() {
    calculateNumber.restore();
  })
  it('validates Utils function called once', function() {
    sendPaymentRequestToApi(100, 200);
    expect(calculateNumber.calledOnce).to.be.true;
  });
  it('validates arguments called in Utils function', function(){
    sendPaymentRequestToApi(100, 200);
    expect(calculateNumber.calledWith('SUM', 100, 200)).to.be.true;
  });
  it('validates return value of Utils function', function() {
    sendPaymentRequestToApi(100, 200);
    expect(calculateNumber.returnValues[0]).to.equal(300);
  });
});

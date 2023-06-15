const chai = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function (){
  let print = {};
  beforeEach(function() {
    print = sinon.spy(console, 'log');
  });
  this.afterEach(function() {
    print.restore();
  })
  it('validates Utils function called once', function() {
    sendPaymentRequestToApi(100, 20);
    chai.expect(print.calledWith('The total is: 120')).to.be.true;
    chai.expect(print.calledOnce).to.be.true;
  });
  it('validates arguments called in Utils function', function(){
    sendPaymentRequestToApi(10, 10);
    chai.expect(print.calledWith('The total is: 20')).to.be.true;
    chai.expect(print.calledOnce).to.be.true;
  });
});

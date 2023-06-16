const chai = require('chai');
const request = require('request');

describe('Cart page', function() {
  it('should return the correct status code for id param a number', function(done) {
    request('http://localhost:7865/cart/12', function(error, response, body) {
      chai.expect(response.statusCode).to.be.equal(200);
      done();
    });
  });
  it('should return the correct result', function(done) {
    request('http://localhost:7865/cart/hello', function(error, response, body) {
      chai.expect(response.statusCode).to.be.equal(404);
      done();
    });
  });
  it('should return correct response on succes', function(done) {
    request('http://localhost:7865/cart/12', function(error, response, body) {
      chai.expect(body).to.be.equal('Payment methods for cart 12');
      done();
    });
  });
});
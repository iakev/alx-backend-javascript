const chai = require('chai');
const request = require('request');

describe('Index page', function() {
  it('should return the correct status code for a succesful get', function(done) {
    request('http://localhost:7865', function(error, response, body) {
      chai.expect(response.statusCode).to.be.equal(200);
      done();
    });
  });
  it('should return the correct result', function(done) {
    request('http://localhost:7865', function(error, response, body) {
      chai.expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
  it('should return correct error code on failure', function(done) {
    request('http://localhost:7865/any', function(error, response, body) {
      chai.expect(response.statusCode).to.be.equal(404);
      done();
    });
  });
});
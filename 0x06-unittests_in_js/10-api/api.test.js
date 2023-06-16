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

describe('Available payments', function() {
  it('Correct status code for succesful request', function(done) {
    request('http://localhost:7865/available_payments', function(error, response, body) {
      chai.expect(response.statusCode).to.be.equal(200);
      done();
    });
  });
  it('Correct object returned on succesful request', function(done) {
    request('http://localhost:7865/available_payments', function(error, response, body) {
      const paymentObject = JSON.parse(body);
      chai.expect(paymentObject).to.deep.equal({"payment_methods":{"credit_cards":true,"paypal":false}});
      done();
    });
  });
});

describe('Login', function() {
  it('Correct response for a succesful request', function(done) {
    const postData = {
      userName: "Betty"
    };
    const url = 'http://localhost:7865/login';
    const options = {
      method: 'post',
      body: postData,
      json: true,
      url: url
    };
    request(options, function(error, response, body) {
      chai.expect(body).to.be.equal(`Welcome ${postData.userName}`);
      done();
    });
  });
  it('Correct status code for a succesful request', function(done) {
    const postData = {
      userName: "Betty"
    };
    const url = 'http://localhost:7865/login';
    const options = {
      method: 'post',
      body: postData,
      json: true,
      url: url
    };
    request(options, function(error, response, body) {
      chai.expect(response.statusCode).to.be.equal(200);
      done();
    });
  });
});

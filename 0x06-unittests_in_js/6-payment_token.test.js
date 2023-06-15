const getPaymentTokenFromAPI = require('./6-payment_token');
const chai = require('chai');

describe('getPaymentTokenFromAPI', function() {
  it('tests an asynchronous piece of code', function(done) {
    getPaymentTokenFromAPI(true)
      .then(function(result) {
        chai.expect(result.data).to.equal('Successful response from the API');
        done();
      });
  });
});

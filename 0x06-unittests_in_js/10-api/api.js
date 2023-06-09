const express = require('express');

const app = express();
const port = 7865;
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});
app.get('/cart/:id([0-9]*)', (req, res) => {
  const id = Number(req.params.id);
  if (!(isNaN(id))) {
    res.send(`Payment methods for cart ${id}`);
  }
});
app.get('/available_payments', (req, res) => {
  const paymentObject = {
    payment_methods : {
      credit_cards: true,
      paypal: false
    }
  };
  res.json(paymentObject);
});
app.post('/login', (req, res) => {
  res.end(`Welcome ${req.body.userName}`);
});
app.listen(port, () => {
  console.log('API available on localhost port 7865');
});
module.exports = app;

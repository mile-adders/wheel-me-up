/* eslint-disable no-undef */
'use strict';

const express = require('express');
const stripe = require('stripe')('sk_test_fmjNzHK4pMb4MyABHiAQgxXe001I54PDuG');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const userCar = require('./model/usercar-schema-model.js'); 
let user = new userCar ;

const app = express();

///handelbars middleware
//configration obj
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine','handlebars');

//body parseer middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


///set static folder

app.use(express.static(`${__dirname}/public1`));

// index route
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/success', (req, res) => {
  // console.log('uujujujuj', req.body);

  res.render('success');
});

//charge route 

app.post('/charge', (req, res) => {
  const amount = 35000;
  
  stripe.customers.create({
    email: req.body.stripeEmail,
    source: req.body.stripeToken,
  })
  .then(customer => stripe.charges.create({
    amount,
    description: 'Car-rentals app',
    currency: 'usd',
    customer: customer.id,
  }))
  .then(charge =>
    
     res.render('success'));
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server started on port ${port}`);

});
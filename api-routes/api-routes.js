'use strict';
const express = require('express');

const car_company = require('../model/car-schema-model.js');
// const userCar = require('../model/usercar-schema-model')

const router = express.Router();

router.get('/car-company', getCar);
router.get('/car-company:_id', getCarByIdea);
router.post('/car-company', postCar);
router.put('/car-company:_id', updatecar );
router.delete('/car-company:_id', deletecar);
let newCar = new car_company; 
/////  read all data 
/**
 * function 
 * read all data ( means show hole data in our api )
 * @param {object} req 
 * @param {object} res 
 * @param {function} next 
 */
function getCar(req, res , next) {
  // console.log('hi')
  newCar.get()
    .then(data => {
      console.log('data in get function' , data);
            
      const results = {
        count: data.length,
        ourData: data,
      };
      res.status(200).json(results);
    })
    .catch(next);
}

/**
 * function 
 * read specific data about one item 
 * @param {object} req 
 * @param {object} res 
 * @param {function} next 
 */
function getCarByIdea(req, res, next) {
  newCar.get(req.param.id)
    .then(results => {
      console.log('results' , results);
      res.status(200).json(results);
    })
    .catch(next);
}

/**
 * function
 * create an object the hold information about our car app 
 * @param {object} req 
 * @param {object} res 
 * @param {function } next 
 */
function postCar(req, res, next) {
  newCar.create(req.body)
    .then(results =>{
      res.status(201).json(results);
    },
    )
    .catch(next);
}

/**
 * function
 * this function aupdate the information and returrn the new data 
 * @param {object} req 
 * @param {object} res 
 * @param {functions} next 
 */

function updatecar (req , res , next){
  console.log('req.body',req.body);
  newCar.update(req.param.id , req.body)
    .then( results =>{
      console.log('results', results);
      res.status(200).json(results);
    })
    .catch(next);
}
/**
 * function
 * it's delete an item 
 * @param {object } req 
 * @param { object} res 
 * @param { functions} next 
 */

function deletecar (req , res , next ){
  newCar.delete (req.param.id)
    .then(results =>{
      results.status(200).json('iam delete');
    })
    .catch(next);
}



module.exports = router;

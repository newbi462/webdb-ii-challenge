const express = require('express');

const db = require('./../data/db.js');

const router = express.Router();

//GET
router.get('/', (request, responce) => {
  db.select('*').from("cars")
    .then(cars => {
      responce.json(cars);
    })
    .catch( error => {
      console.log(error);
      responce.status(500).json(
        {
          error: "Get Failed."
        }
      )
    })
});

//POST


//PUT


//DEL

module.exports = router;

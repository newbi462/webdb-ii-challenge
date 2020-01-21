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
router.post('/', (request, responce) => {
  db("cars").insert(request.body)
    .then(idOfAdded => {
      db("cars").where({id:idOfAdded[0]})
      .then(acc => { responce.json(acc); })
      .catch( error => {
        console.log(error);
        responce.status(500).json(
          {
            error: "Where by ID Failed."
          }
        )
      })
    })
    .catch( error => {
      console.log(error);
      responce.status(500).json(
        {
          error: "Post Failed."
        }
      )
    })
});

//PUT
router.put('/:id', (request, responce) => {
  db("cars").where({ id: request.params.id }).update(request.body)
    .then(numUpdated => {
      responce.json(numUpdated);
    })
    .catch( error => {
      console.log(error);
      responce.status(500).json(
        {
          error: "PUT Failed."
        }
      )
    })
});

//DEL
router.delete('/:id', (request, responce) => {
  db("cars").where({ id: request.params.id }).del()
    .then(numRemoved => {
      responce.json(numRemoved);
    })
    .catch( error => {
      console.log(error);
      responce.status(500).json(
        {
          error: "PUT Failed."
        }
      )
    })
});

module.exports = router;

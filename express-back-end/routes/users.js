const express = require('express');
const router = express.Router();

module.exports = (knex) => {

  // route to get users for API

  router.get('/', (req, res) => {
    knex
      .select('*')
      .from('users')
      .then((results) => {
        res.json(results);
      });
  });

  // route to add a new user to the database

  router.post('/', (req, res) => {
    knex('users')
      .insert(
        {
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        },
      )
      .then(() => {
        res.send('success');
      });
  });

  return router;

}
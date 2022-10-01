const express = require('express');
const router = express.Router();

module.exports = (knex) => {

  // route to get favourites by user id

  router.get('/:id', (req, res) => {

    knex
      .select('*')
      .from('favourites')
      .where('user_id', req.params.id)
      .then((results) => {
        res.json(results);
      });
  })

  // route to add a new favourite to the database

  router.post('/', (req, res) => {
    knex('favourites')
      .insert(
        {
          user_id: req.body.user_id,
          ap_cocktail_id: req.body.api_cocktail_id
        },
      )
      .then(() => {
        res.send('success');
      });
  });

  // route to delete a favourite from the database

  router.delete('/:id', (req, res) => {

    knex('favourites')
      .where('id', req.params.id)
      .del()
      .then(() => {
        res.send('success');
      });
  });

  return router;

}

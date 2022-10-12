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

  router.post('/:id', (req, res) => {
    knex('favourites')
      .insert(
        {
          user_id: req.body.user_id,
          api_cocktail_id: req.body.api_cocktail_id
        },
      )
      .then(() => {
        res.send('success');
      });
  });

  // route to delete a favourite from the database
  router.delete('/:id', (req, res) => {
    console.log("query param is: ", req.query)
    knex('favourites')
      .where({
        api_cocktail_id: req.params.id,
        user_id: req.query.userId
      })
      .del()
      .then(() => {
        res.send('success');
      });
  });

  return router;

}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('favourites').del()
  await knex('favourites').insert([
    {id: 1, user_id: 1, api_cocktail_id: 11007},
    {id: 2, user_id: 1, api_cocktail_id: 11008},
    {id: 3, user_id: 1, api_cocktail_id: 11009}
  ]);
};

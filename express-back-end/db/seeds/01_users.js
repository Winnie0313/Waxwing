/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {id: 1, name: 'John', password: 'password', email: 'john@john.com'},
    {id: 2, name: 'Jane', password: 'password', email: 'jane@jane.com'},
    {id: 3, name: 'Jack', password: 'password', email: 'jack@jack.com'}
  ]);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {

  return knex.schema
  .createTable("favourites", (table) => {
    table.increments("id").primary();
    table.string("api_cocktail_id").notNullable();
    table.integer('user_id').unsigned().references('users.id').onDelete('cascade');
  });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {

  return knex.schema
  .dropTable("favourites");
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('participants', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('key')
    table.string('audioURL')
    table.string('question')
    table.string('answer')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('participants')
}

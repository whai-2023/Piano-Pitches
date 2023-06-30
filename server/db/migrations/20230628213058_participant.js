/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('participants', (table) => {
    table.increments('id').primary()
    table.string('key').primary()
    table.string('name')
    table.string('audioURL')
    table.string('question')
    table.string('answer')
    table.binary('image')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('participants')
}

exports.up = (knex) => {
  return knex.schema.createTable('questions', (table) => {
    table.increments('id').primary()
    table.integer('participantId')
    table.string('question')
    table.string('answer')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('questions')
}

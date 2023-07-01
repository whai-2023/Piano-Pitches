exports.up = function (knex) {
  return knex.schema.createTable('newParticipants', (table) => {
    table.increments('id').primary()
    table.string('key').primary()
    table.string('name')
    table.string('audioUrl')
    table.string('question')
    table.string('answer')
    table.string('imageUrl')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('newParticipants')
}

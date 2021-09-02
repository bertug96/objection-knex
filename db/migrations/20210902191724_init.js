
exports.up = function (knex) {
    return knex.schema.createTable('person', (table) => {
        table.increments();
        table.string('name').notNullable();
        table.string('password').notNullable();
        table.string('email').notNullable().unique();
        table.timestamps(true, true);
    }).createTable('subject', (table) => {
        table.increments();
        table.string('subject').notNullable();
        table.integer('person_id').references('id').inTable('person');
        table.timestamps(true, true);
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('person').dropTableIfExists('subject');
};

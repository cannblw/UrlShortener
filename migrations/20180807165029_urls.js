exports.up = async function(knex) {
    await knex.schema.createTable('urls', function(t) {
        t.increments();
        t.string('url');
        t.string('url_ID')
        t.timestamp('created_at').defaultTo(knex.fn.now())
        t.timestamp('updated_at').defaultTo(knex.fn.now())
    });
};

exports.down = async function(knex) {
    await knex.schema.dropTable('urls');
};

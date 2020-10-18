
exports.up = async function(knex) {
	await knex.schema.createTable('cars', tbl => {
        tbl.increments();
        tbl.text('vin', 128).unique().notNullable();
        tbl.text('make', 128).notNullable();
        tbl.text('model', 128).notNullable();
        tbl.bigInteger('mileage').notNullable();
        tbl.text('transmission', 128);
        tbl.text('title', 128);
	})
}

exports.down = async function(knex) {
	await knex.schema.dropTableIfExists('cars')
}
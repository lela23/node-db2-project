
exports.seed = async function(knex) {
	// clear out table
	// truncate does more than .del(), like resetting the autoincrementing ID
  await knex('cars').truncate();
  await knex('sales').truncate();
}
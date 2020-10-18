
exports.seed = async function(knex) {
	await knex('cars').insert([
    {vin: '5NMSH13EX8H106000', make: 'CHEVY', model: 'CRUZE', mileage: 125321, transmission: 'AUTOMATIC', title: 'CLEAN' },
    {vin: 'JN8AF5MV3CT150035', make: 'FORD', model: 'MUSTANG', mileage: 24576, title: 'CLEAN' },
    {vin: 'JTDBE32K020118790', make: 'FORD', model: 'EXPLORER', mileage: 95321, transmission: 'AUTOMATIC' },
    {vin: '2C4RC1CG2FR570495', make: 'KIA', model: 'SEDONA', mileage: 31245, title: 'SALVAGE' },
    {vin: '1FMYU93153KB55602', make: 'VOLKSWAGEN', model: 'CROSSFOX', mileage: 32457, transmission: 'MANUAL', title: 'CLEAN' },
    {vin: 'JTDBT4K37CL051917', make: 'AUDI', model: 'A4', mileage: 154264, transmission: 'MANUAL' }
  ])
}
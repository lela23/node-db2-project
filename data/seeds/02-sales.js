
exports.seed = async function(knex) {
	await knex('sales').insert([
    {car_id: 2, sale_date: '2018-04-03', price: 29324.99},
    {car_id: 4, sale_date: '2018-05-07', price: 35120.55},
    {car_id: 2, sale_date: '2018-09-04', price: 40540.32},
    {car_id: 5, sale_date: '2018-10-06', price: 18350.99},
    {car_id: 1, sale_date: '2018-11-09', price: 63241.55},
    {car_id: 4, sale_date: '2018-12-20', price: 23165.99},
    {car_id: 6, sale_date: '2019-01-09', price: 32418.99},
    {car_id: 1, sale_date: '2019-02-12', price: 36549.55},
    {car_id: 3, sale_date: '2019-05-11', price: 12784.45}
  ])
}
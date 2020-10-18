const express = require('express');
const router = express.Router();

const db = require('../../data/dbConfig');

// Returns All Cars in the database
router.get('/', async (req, res) => {
	try {
		const cars  = await db('cars');
		res.json(cars);
	} catch (err) {
		next(err);
	}
})

// Returns the Car with the specified id
router.get('/:id', async (req, res) => {
	try {
		const car  = await db('cars').where('id', req.params.id).limit(1);
		res.json(car);
	} catch (err) {
		next(err);
	}
})

// Creates a new car
router.post('/', async (req, res, next) => {

	try {
		const payload = {
			vin: req.body.vin,
			make: req.body.make,
			model: req.body.model,
			mileage: req.body.mileage,
			transmission: req.body.transmission,
			title: req.body.title
		}

		const [carID] = await db('cars').insert(payload);
		const car = await db.first('*').from('cars').where('id', carID);

		res.status(201).json(car);
	} catch (err) {
		next(err);
	}
})

// Update a car with the specified id
router.put('/:id', async (req, res, next) => {
	try {
		const payload = {
			vin: req.body.vin,
			make: req.body.make,
			model: req.body.model,
			mileage: req.body.mileage,
			transmission: req.body.transmission,
			title: req.body.title
		}

		await db('cars').update(payload).where('id', req.params.id)
		const car = await db.first('*').from('cars').where('id', req.params.id)
		res.json(car)

	} catch (err) {
		next(err)
	}
})

// Deletes a car with the specified id
router.delete('/:id', async (req, res, next) => {
	try {
		await db('cars').where('id', req.params.id).del()
		res.status(204).end()
	} catch (err) {
		next(err)
	}
})

module.exports = router;
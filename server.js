const express = require('express');

const welcomeRouter = require('./car-api/welcome/welcome-router');
const carsRouter = require('./car-api/cars/cars-router');

const server = express();

server.use(express.json());

server.use('/', welcomeRouter);
server.use('/cars', carsRouter);

module.exports = server;
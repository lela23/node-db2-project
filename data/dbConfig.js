const knex = require('knex');

const knexfile = require('../knexfile.js');

// select the development object from our knexfile
const database = 'development';

module.exports = knex(knexfile[database]);

const pgp = require('pg-promise')();

const connectionString = process.env.DB_URL;

const db = pgp(connectionString);

module.exports = db;
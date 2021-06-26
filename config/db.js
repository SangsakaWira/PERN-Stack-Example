const Pool = require('pg').Pool

const pool = new Pool({
    user: 'sangsakawira',
    password: 'contohpassword',
    database: 'perumahan',
    host: process.env.DB_URL || "localhost",
    port: 5432
})

pool.query(`CREATE TABLE IF NOT EXISTS users(
    id Serial NOT NULL UNIQUE PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255));`)

module.exports = pool;
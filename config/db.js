const Pool = require('pg').Pool

const pool = new Pool({
    user: 'sangsakawira',
    password: 'contohpassword',
    database: 'perumahan',
    host: process.env.DB_URL || "localhost",
    port: 5432
})

pool.query(`CREATE TABLE IF NOT EXISTS users(
    id Serial PRIMARY KEY,
    username VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255));`)

module.exports = pool;
const Pool = require('pg').Pool

const pool = new Pool({
    user: 'sangsakawira',
    password: 'passwordcontoh',
    database: 'example_db',
    host: 'localhost',
    port: 6666
})

module.exports = pool;
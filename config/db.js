const Pool = require('pg').Pool

const pool = new Pool({
    user: 'sangsakawira',
    password: 'contoh',
    database: 'perumahan',
    host: 'localhost',
    port: 6666
})

module.exports = pool;
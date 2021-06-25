const Pool = require('pg').Pool

const pool = new Pool({
    user: 'sangsakawira',
    password: 'contohlagi',
    database: 'perumahan',
    host: 'localhost',
    port: 7777
})

module.exports = pool;
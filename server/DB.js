const Pool = require('pg').Pool;

// connect DB
const pool = new Pool({
    user: '',
    host: 'localhost',
    database: 'spend_manager',
    password: '',
    port: 5432    
})

module.exports = pool;
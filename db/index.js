const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'macuser',
  database: 'producepay',
  host: 'localhost',
  port: 5432,
})

module.exports = pool;
const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'students_api',
  password: 'admin',
  port: 5432,
})

module.exports = pool

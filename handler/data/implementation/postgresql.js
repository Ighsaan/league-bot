const { Pool } = require('pg')

const pool = new Pool({
  user: 'dev',
  host: 'localhost',
  database: 'league',
  password: 'ilpass123',
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params)
}

const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: false, 
});

pool.on('connect', () => {
  console.log('Connected to PostgreSQL');
});

module.exports = pool;

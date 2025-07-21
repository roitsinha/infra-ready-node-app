import pool from '../models/db.js';

const initDB = async () => {
  try {
    // Create users table if it doesn't exist
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE
      );
    `);

    // Insert Alice and Bob, ignore duplicates
    await pool.query(`
      INSERT INTO users (name, email) VALUES
        ('Alice', 'alice@example.com'),
        ('Bob', 'bob@example.com')
      ON CONFLICT (email) DO NOTHING;
    `);

    console.log('✅ Database initialized with seed data.');
  } catch (error) {
    console.error('❌ Error initializing database:', error.message);
  } finally {
    await pool.end();
  }
};

initDB();

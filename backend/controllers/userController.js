import pool from '../models/db.js';

export const getUsers = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users ORDER BY id ASC');
    res.status(200).json(result.rows);
  } catch (err) {
    console.error('❌ Error fetching users:', err.message);
    res.status(500).json({ error: 'Server error' });
  }
};

export const createUser = async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required.' });
  }

  try {
    const result = await pool.query(
      'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
      [name, email]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    if (err.code === '23505') {
  
      console.error('⚠️ Duplicate email:', email);
      return res.status(409).json({ error: 'Email already exists.' });
    }

    console.error('❌ Error inserting user:', err.message);
    res.status(500).json({ error: 'Server error' });
  }
};

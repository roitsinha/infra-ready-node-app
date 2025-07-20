const request = require('supertest');
const app = require('../index');       
const pool = require('../models/db'); 

describe('GET /api/users', () => {
  it('should return users including Alice and Bob', async () => {
    const response = await request(app).get('/api/users');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: 'Alice', email: 'alice@example.com' }),
        expect.objectContaining({ name: 'Bob', email: 'bob@example.com' }),
      ])
    );
  });
});

afterAll(async () => {
  await pool.end();
});

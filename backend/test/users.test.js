const request = require('supertest');
const app = require('../index');

describe('GET /api/users', () => {
  it('should return an array of users', async () => {
    const response = await request(app).get('/api/users');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});

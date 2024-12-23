import request from 'supertest';
import app from '../src/server.js';  
import { connect, disconnect } from 'mongoose';
import { describe, it, expect } from '@jest/globals';

describe('API Tests', () => {
  beforeAll(async () => {
    await connect(process.env.MONGODB_URI || 'mongodb://localhost/test');
  });

  afterAll(async () => {
    await disconnect();
  });

  test('GET /api/questions/random returns question', async () => {
    const res = await request(app).get('/api/questions/random');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('question');
  });
});

describe('Server API Tests', () => {
  it('should pass', () => {
    expect(true).toBe(true);
  });
});
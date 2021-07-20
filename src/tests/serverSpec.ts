import supertest from 'supertest';
import app from '../server';

const request = supertest(app);
describe('Test endpoint responses', () => {
  it('gets the api endpoint', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
  });

  it('invalid parameters on api/images endpoint returns 400', async () => {
    const response = await request.get('/api/images');
    expect(response.status).toBe(400);
  });
});

import { app } from '@app/app';
import * as request from 'supertest';

describe('Root', () => {
  it('Should return hello world on /', async () => {
    const result = await request(app).get('/').send();

    expect(result.status).toBe(200);
    expect(result.body.message).toEqual('Hello World!');
  });
});

import { app } from '@app/app';
import User from '@models/user';
import mongoose from 'mongoose';
import request from 'supertest';

describe('User', () => {
  const testRecords: any[] = [
    {
      email: 'user1@example.com',
    },
    {
      email: 'user2@example.com',
    },
    {
      email: 'user3@example.com',
    },
  ];

  beforeAll(async () => {
    await mongoose.connect(`${process.env.MONGO_URL}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await User.insertMany(testRecords);
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should return list of users on /users', async () => {
    const result = await request(app).get('/users').send();

    expect(result.status).toBe(200);
    result.body.data.forEach((item: any) => {
      expect(item).toMatchSnapshot({
        _id: expect.any(String),
        email: expect.any(String),
        status: expect.any(String),
      });
    });
  }, 10000);
});

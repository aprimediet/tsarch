import { app } from '@app/app';
import { EUserStatus, TUser } from '@app/interfaces/user';
import User from '@models/user';
import mongoose from 'mongoose';
import request from 'supertest';

describe('User', () => {
  const testRecords: TUser[] = [
    {
      email: 'user1@example.com',
      status: EUserStatus.ACTIVE,
    },
    {
      email: 'user2@example.com',
      status: EUserStatus.ACTIVE,
    },
    {
      email: 'user3@example.com',
      status: EUserStatus.DISABLED,
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
    expect(result.body.data).toBe(testRecords);
  }, 10000);
});

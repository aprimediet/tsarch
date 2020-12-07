import { IUserDocument } from '@interfaces/user';
import { Query } from 'mongoose';
import User from '@models/user';

export class UserRepo {
  model = User;

  async list(): Promise<Query<IUserDocument[], IUserDocument>> {
    return await this.model.find();
  }
}

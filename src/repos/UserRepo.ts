import { Inject, Injectable } from 'injection-js';
import User from '@models/user';
import { IUserDocument } from '@app/interfaces/user';
import { Model, Query } from 'mongoose';

@Injectable()
export class UserRepo {
  constructor(@Inject(User) private model: Model<IUserDocument>) {}

  async list(): Promise<Query<IUserDocument[], IUserDocument>> {
    return await this.model.find();
  }
}

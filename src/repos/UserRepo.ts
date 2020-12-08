import { TUser } from '@interfaces/user';
import User from '@models/user';

export class UserRepo {
  model = User;

  async list(): Promise<TUser[]> {
    const query = await this.model.find().lean();
    const results: string = JSON.stringify(query);

    return JSON.parse(results);
  }
}

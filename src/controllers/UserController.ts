import { THttpListResult } from '@interfaces/http';
import { IUserDocument } from '@interfaces/user';
import { UserRepo } from '@repos/UserRepo';
import { Controller, Get } from 'routing-controllers';

@Controller('/users')
export class UserController {
  userRepo = new UserRepo();

  @Get('/')
  async list(): Promise<THttpListResult<IUserDocument>> {
    const data = await this.userRepo.list();

    return {
      data,
    };
  }
}

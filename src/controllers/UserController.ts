import { THttpListResponse } from '@interfaces/http';
import { TUser } from '@interfaces/user';
import { UserRepo } from '@repos/UserRepo';
import { Get, JsonController } from 'routing-controllers';

@JsonController('/users')
export class UserController {
  userRepo = new UserRepo();

  @Get('/')
  async list(): Promise<THttpListResponse<TUser>> {
    const data = await this.userRepo.list();

    return {
      data,
    };
  }
}

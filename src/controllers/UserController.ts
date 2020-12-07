import { UserRepo } from '@repos/UserRepo';
import { Inject } from 'injection-js';
import { Controller, Get } from 'routing-controllers';

@Controller('/users')
export class UserController {
  constructor(@Inject(UserRepo) private userRepo: UserRepo) {}

  @Get('/')
  async list(): Promise<any> {
    return await this.userRepo.list();
  }
}

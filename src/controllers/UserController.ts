import { UserRepo } from '@app/repos/UserRepo';
import { Inject } from 'injection-js';
import { Controller } from 'routing-controllers';

@Controller('/users')
export class UserController {
  constructor(@Inject(UserRepo) private userRepo: UserRepo) {}

  async list(): Promise<any> {
    return await this.userRepo.list();
  }
}

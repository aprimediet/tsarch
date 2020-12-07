import { Controller, Get } from 'routing-controllers';

@Controller()
export class RootController {
  @Get('/')
  root(): Record<string, unknown> {
    return {
      message: 'Hello World!',
    };
  }
}

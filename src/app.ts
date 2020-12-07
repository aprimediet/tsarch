import 'reflect-metadata';
import { Application } from 'express';
import { createExpressServer } from 'routing-controllers';
import { RootController } from '@controllers/RootController';
import { UserController } from '@controllers/UserController';
import { open } from '@libs/db';
import { json } from 'body-parser';

const app: Application = createExpressServer({
  controllers: [RootController, UserController],
});

async function bootstrap(): Promise<void> {
  // Connect to database
  await open();

  app.use(json());
}

bootstrap();

export { app };

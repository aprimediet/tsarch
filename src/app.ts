import 'reflect-metadata';
import { Application } from 'express';
import { createExpressServer } from 'routing-controllers';
import { RootController } from '@controllers/RootController';
import { UserController } from '@controllers/UserController';
import { json } from 'body-parser';

const app: Application = createExpressServer({
  controllers: [RootController, UserController],
});

app.use(json);

export { app };

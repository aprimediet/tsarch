import 'reflect-metadata';
import { Application } from 'express';
import { createExpressServer } from 'routing-controllers';
import { RootController } from './controllers/RootController';
import { json } from 'body-parser';

const app: Application = createExpressServer({
  controllers: [RootController],
});

app.use(json());

export { app };

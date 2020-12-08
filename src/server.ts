import { app } from './app';
import { open } from './libs/db';

const port = process.env.PORT || 3000;

// Connect to database
open(() => {
  console.log('callback');
  app.listen(port, () => {
    console.log(`app is listening on ${port}`);
  });
});

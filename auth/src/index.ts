import { json } from 'body-parser';
import express from 'express';
import { appRouter } from './routes';

const app = express();
app.use(json());

app.use(appRouter);

const port = 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});
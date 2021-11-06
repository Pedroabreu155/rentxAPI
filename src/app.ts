import express from 'express';

import { categoriesRoutes } from './routes/categories.routes';

const app = express();

app.use(express.json());
app.use(categoriesRoutes);

app.get('/', (_, response) => response.json({ message: 'Hello World!' }));

export { app };

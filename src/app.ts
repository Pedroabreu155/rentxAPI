import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger.json';
import './database';
import './shared/container';

import { router } from './routes';

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(express.json());
app.use(router);

app.get('/', (_, response) => response.json({ message: 'Hello World!' }));

export { app };

import { Router } from 'express';

import { createCategoryController } from '../modules/cars/useCases/Category/create';
import { listCategoriesController } from '../modules/cars/useCases/Category/list';

const categoriesRoutes = Router();

categoriesRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get('/', (request, response) => {
  return listCategoriesController.handle(request, response);
});

export { categoriesRoutes };

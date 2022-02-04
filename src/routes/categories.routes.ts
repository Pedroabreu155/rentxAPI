import { Router } from 'express';
import multer from 'multer';

import { CreateCategoryController } from '../modules/cars/controllers/Category/CreateCategoryController';
import { ListCategoriesController } from '../modules/cars/controllers/Category/ListCategoriesController';
import { ImportCategoryController } from '../modules/cars/controllers/Category/ImportCategoryController';

const categoriesRoutes = Router();
const upload = multer({
  dest: './tmp',
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.post('/', createCategoryController.handle);
categoriesRoutes.get('/', listCategoriesController.handle);
categoriesRoutes.post('/import', upload.single('file'), importCategoryController.handle);

export { categoriesRoutes };

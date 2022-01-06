import { container } from 'tsyringe';

import { ICategoriesRepository } from '../../modules/cars/repositories/Categories/interfaces';
import { CategoriesRepository } from '../../modules/cars/repositories/Categories/CategoriesRepository';

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);

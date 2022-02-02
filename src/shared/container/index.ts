import { container } from 'tsyringe';

import { ICategoriesRepository } from '../../modules/cars/repositories/Categories/interfaces';
import { CategoriesRepository } from '../../modules/cars/repositories/Categories/CategoriesRepository';
import { ISpecificationsRepository } from '../../modules/cars/repositories/Specifications/interfaces';
import { SpecificationsRepository } from '../../modules/cars/repositories/Specifications/SpecificationsRepository';

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<ISpecificationsRepository>(
  'SpecificationsRepository',
  SpecificationsRepository,
);

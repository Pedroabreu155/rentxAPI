import { container } from 'tsyringe';

import { ICategoriesRepository } from '../../modules/cars/repositories/Categories/interfaces';
import { CategoriesRepository } from '../../modules/cars/repositories/Categories/CategoriesRepository';
import { ISpecificationsRepository } from '../../modules/cars/repositories/Specifications/interfaces';
import { SpecificationsRepository } from '../../modules/cars/repositories/Specifications/SpecificationsRepository';
import { IUsersRepository } from '../../modules/accounts/repositories/user/interfaces';
import { UsersRepository } from '../../modules/accounts/repositories/user/UsersRepository';

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<ISpecificationsRepository>(
  'SpecificationsRepository',
  SpecificationsRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

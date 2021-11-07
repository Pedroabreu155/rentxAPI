import { Category } from '../../../models/Category';

import { ICategoriesRepository } from '../../../repositories/Categories/interfaces';

export class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute(): Category[] {
    const categories = this.categoriesRepository.list();
    return categories;
  }
}

import { inject, injectable } from 'tsyringe';
import { Category } from '../../entities/Category';

import { ICategoriesRepository } from '../../repositories/Categories/interfaces';

@injectable()
export class ListCategoriesUseCase {
  constructor(@inject('CategoriesRepository') private categoriesRepository: ICategoriesRepository) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.list();
    return categories;
  }
}

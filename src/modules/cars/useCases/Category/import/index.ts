import { CategoriesRepository } from '../../../repositories/Categories/CategoriesRepository';
import { ImportCategoryController } from './ImportCategoryController';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';

const categoriesRepository = CategoriesRepository.getInstance();
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository);
export const importCategoryController = new ImportCategoryController(
  importCategoryUseCase,
);
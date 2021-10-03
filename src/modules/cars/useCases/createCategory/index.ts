import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CraeteCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstance()
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository)
const craeteCategoryController = new CraeteCategoryController(createCategoryUseCase)

export{craeteCategoryController}
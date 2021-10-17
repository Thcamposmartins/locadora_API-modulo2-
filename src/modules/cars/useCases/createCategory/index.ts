import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CraeteCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

export default (): CraeteCategoryController =>{
    const categoriesRepository = new CategoriesRepository()
    const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository)
    const craeteCategoryController = new CraeteCategoryController(createCategoryUseCase)

    return craeteCategoryController
}

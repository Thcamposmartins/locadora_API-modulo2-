import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CraeteSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const categoriesRepository = CategoriesRepository.getInstance()
const createSpecificationUseCase = new CreateSpecificationUseCase(categoriesRepository)
const craeteSpecificationController = new CraeteSpecificationController(createSpecificationUseCase)

export{craeteSpecificationController}
import { inject, injectable } from "tsyringe"
import { AppError } from "../../../../shared/error/AppError"
import { ICategoriesRepository } from "../../infra/typeorm/repositories/ICategoriesRepository"

interface IRequest{ 
    name: string
    description: string
}
@injectable()
class CreateCategoryUseCase{
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository){}

    async execute({name, description}: IRequest){
        const categoryAlreadyExists = await this.categoriesRepository.findByName(name)
        if(categoryAlreadyExists){
            throw new AppError( "Category Already exists! ❌")
        }
        this.categoriesRepository.create({name, description})
    }
}
export{ CreateCategoryUseCase }
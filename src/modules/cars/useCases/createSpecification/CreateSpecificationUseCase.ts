import { inject, injectable } from "tsyringe"
import { AppError } from "../../../../shared/error/AppError"
import { ISpecificationRepository } from "../../infra/typeorm/repositories/ISpecificationRepository"

interface IRequest{
    name: string
    description: string
}
@injectable()
class CreateSpecificationUseCase{

    constructor(
        @inject("SpecificationRepository")
        private specificationRepository: ISpecificationRepository){}

    execute({name, description}: IRequest){
        const specificationAlreadyExists = this.specificationRepository.findByName(name)
        if(specificationAlreadyExists){
            throw new AppError( "Specification Already exists! ❌")
        }
        this.specificationRepository.create({name, description})
    }
}

export {CreateSpecificationUseCase}
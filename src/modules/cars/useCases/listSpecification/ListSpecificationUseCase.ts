import { inject, injectable } from "tsyringe"
import { Specification } from "../../infra/typeorm/entities/Specification"
import { ISpecificationRepository } from "../../infra/typeorm/repositories/ISpecificationRepository"

@injectable()
class ListSpecificationUseCase{

    constructor(
        @inject("SpecificationRepository")
        private specificationRepository: ISpecificationRepository){}

    async execute():Promise<Specification[]>{
        const specification = await this.specificationRepository.list()
        return specification
    }
}
export{ListSpecificationUseCase}
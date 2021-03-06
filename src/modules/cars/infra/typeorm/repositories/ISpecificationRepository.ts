import { Specification } from "../entities/Specification";

interface ISpecificationRepositoryDTO{
    name: string
    description: string
}
interface ISpecificationRepository{
    create({name, description}: ISpecificationRepositoryDTO):void
    findByName(name:string): Promise<Specification>
    list(): Promise<Specification[]>
}

export {ISpecificationRepository,ISpecificationRepositoryDTO}
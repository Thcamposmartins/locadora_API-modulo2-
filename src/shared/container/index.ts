import { container } from "tsyringe"
import { IUsersRepository } from "../../modules/accounts/infra/typeorm/repositories/IUsersRepository"
import { UsersRepository } from "../../modules/accounts/infra/typeorm/repositories/implementations/UsersRepository"
import { ICategoriesRepository } from "../../modules/cars/infra/typeorm/repositories/ICategoriesRepository"
import { CategoriesRepository } from "../../modules/cars/infra/typeorm/repositories/implementations/CategoriesRepository"
import { SpecificationRepository } from "../../modules/cars/infra/typeorm/repositories/implementations/SpecificationRepository"
import { ISpecificationRepository } from "../../modules/cars/infra/typeorm/repositories/ISpecificationRepository"

container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
)
container.registerSingleton<ISpecificationRepository>(
    "SpecificationRepository",
    SpecificationRepository
)

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
)

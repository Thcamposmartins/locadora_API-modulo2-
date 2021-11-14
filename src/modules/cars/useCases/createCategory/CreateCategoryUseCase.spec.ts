import { AppError } from "../../../../shared/error/AppError"
import { CategoriesRepositoryInMemory } from "../../infra/typeorm/repositories/in-memory/CategoriesRepositoryInMemory"
import { CreateCategoryUseCase } from "./CreateCategoryUseCase"

let createCategoryUseCase: CreateCategoryUseCase
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory

describe("Create category", () => {

    beforeEach(()=>{
        categoriesRepositoryInMemory = new CategoriesRepositoryInMemory()
        createCategoryUseCase = new CreateCategoryUseCase(categoriesRepositoryInMemory) 
    })

    it("Should create new category", async () => {
        const category = {
            name: "Category test",
            description: "Category description test"
        }

        await createCategoryUseCase.execute({
            name: category.name,
            description: category.description
        })

        const categoryResponse = await categoriesRepositoryInMemory.findByName(category.name)
        expect(categoryResponse).toHaveProperty("id")

    })
    it("Should not be able to create a new category with name axists", async () => {
        expect(async()=>{
            const category = {
                name: "Category test",
                description: "Category description test"
            }
    
            await createCategoryUseCase.execute({
                name: category.name,
                description: category.description
            })
        }).rejects.toBeInstanceOf(AppError)
    })
})
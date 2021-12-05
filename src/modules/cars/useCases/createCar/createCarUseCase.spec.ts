import { CarRepositoryInMemory } from "../../infra/typeorm/repositories/in-memory/CarRepositoryInMemory"
import { CreateCarUseCase } from "./createCarUseCase"
import { AppError } from "../../../../shared/error/AppError"


let createCarUseCase: CreateCarUseCase
let carsRepositoryInMemory: CarRepositoryInMemory

describe("Create car", () => {

    beforeEach(() => {
        carsRepositoryInMemory = new CarRepositoryInMemory()
        createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory)
    })
    it("Should be able create a new car", async () => {
       const car = await createCarUseCase.execute({
            name: "name Car",
            description: "Descriptio car",
            daily_rate: 100,
            license_plate: "ABC-8585",
            fine_amount: 60,
            brand: "Brand",
            category_id: "Category"
        })
        expect(car).toHaveProperty("id")
    })

    it("Should not be able create a new car with exists license plate", () => {
        expect(async () => {
            await createCarUseCase.execute({
                name: "Car 1",
                description: "Descriptio car",
                daily_rate: 100,
                license_plate: "ABC-8585",
                fine_amount: 60,
                brand: "Brand",
                category_id: "Category"
            })
            await createCarUseCase.execute({
                name: "Car 2",
                description: "Descriptio car",
                daily_rate: 100,
                license_plate: "ABC-8585",
                fine_amount: 60,
                brand: "Brand",
                category_id: "Category"
            })
        }).rejects.toBeInstanceOf(AppError)
    })
    
    it("Should be able create a new car with available true by default", async () => {
        
        const car = await createCarUseCase.execute({
            name: "Car available",
            description: "Descriptio car",
            daily_rate: 100,
            license_plate: "ABCS-8585",
            fine_amount: 60,
            brand: "Brand",
            category_id: "Category"
        })
        expect(car.available).toBe(true)

    })
})
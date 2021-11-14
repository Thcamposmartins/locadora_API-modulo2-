import { AppError } from "../../../../shared/error/AppError"
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO"
import { UsersRepositoryInMemory } from "../../infra/typeorm/repositories/in-memory/UsersRepositoryInMemory"
import { CreateUserUseCase } from "../createUser/CreateUserUseCase"
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase"

let usersRepositoryInMemory: UsersRepositoryInMemory
let authenticateUserUseCase: AuthenticateUserUseCase
let createUserUseCase: CreateUserUseCase

describe("Authenticate user", ()=>{

    beforeEach(()=>{
        usersRepositoryInMemory = new UsersRepositoryInMemory()
        authenticateUserUseCase = new AuthenticateUserUseCase(usersRepositoryInMemory)
        createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory)
    })

    it("Should be able authenticate an user ", async () => {

        const user:ICreateUserDTO = {
            driver_license: "0000123456",
            email: "thteste@teste.com",
            name: "Th Teste User",
            password: "123456"
        }
        await createUserUseCase.execute(user)

        const result = await authenticateUserUseCase.execute({
            email: user.email,
            password: user.password
        })

        expect(result).toHaveProperty("token")

    })

    it("Should not be able to authenticate an nonexistent user", () => {
        expect(async ()=> {
            await authenticateUserUseCase.execute({
                email: "th@teste.br",
                password: "1239"
            })
        }).rejects.toBeInstanceOf(AppError)
    })
    it("Should not be able authenticate an user with incorrect password ", () => {
        expect(async () => {
            const user:ICreateUserDTO = {
                driver_license: "0000123878",
                email: "teste@teste.com",
                name: "Teste User",
                password: "123456"
            }
            await createUserUseCase.execute(user)

            await authenticateUserUseCase.execute({
                email: user.email,
                password: "987456"
            })
        }).rejects.toBeInstanceOf(AppError)

    })
})
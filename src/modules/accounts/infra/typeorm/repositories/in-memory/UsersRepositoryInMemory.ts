import { ICreateUserDTO } from "../../../../dtos/ICreateUserDTO";
import { Users } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository{

    users: Users[] = []

    async create({driver_license, email, name, password}: ICreateUserDTO): Promise<void> {
        const user = new Users()
        Object.assign(user,{
            driver_license, 
            email, 
            name,
            password
        })

        this.users.push(user)
    }

    async findByEmail(email: string): Promise<Users> {
        const user = this.users.find((user)=> user.email === email )
        return user
    }

    async findById(id: string): Promise<Users> {
        const user = this.users.find((user)=> user.id === id )
        return user
    }

    
}
export { UsersRepositoryInMemory }
import { getRepository, Repository } from "typeorm";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { Users } from "../../entities/User"
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository{

    private repository : Repository<Users>
    
    constructor(){
        this.repository = getRepository(Users)
     }

     async create({name,
        password,
        email,
        driver_license
    }: ICreateUserDTO){
        const user = this.repository.create({
            name,
            password,
            email,
            driver_license,            
        })
        await this.repository.save(user)
    }

    async findByEmail(email: string): Promise<Users> {
        const user = await this.repository.findOne({ email })
        return user
    }

}

export { UsersRepository }
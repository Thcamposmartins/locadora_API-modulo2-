import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../infra/typeorm/repositories/IUsersRepository";
import { hash } from "bcryptjs"
import { AppError } from "../../../../shared/error/AppError";

@injectable()
class CreateUserUseCase{
    constructor(
        @inject("UsersRepository")
        private userRepository: IUsersRepository){}

    async execute({name,
        password,
        email,
        driver_license}:ICreateUserDTO){
            const passwordHash = await hash(password,8)
            try {
                const userAlreadyExists = await this.userRepository.findByEmail(email)

                if(userAlreadyExists){
                    throw new AppError( "User Already exists! ❌")
                }
                this.userRepository.create({name,
                                            password: passwordHash,
                                            email,
                                            driver_license})
                
            } catch (error) {
                throw new AppError( "Didn't was possible create a new user! 😪")
            }
    }

}

export { CreateUserUseCase }
import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken";

interface IRequest{
    email: string
    password: string
}
interface IResponse{
    user:{
        name: string
        email:string
    }
    token: string
}
@injectable()
class AuthenticateUserUseCase{
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){}
    async execute({email, password}:IRequest){
        const user =  await this.usersRepository.findByEmail(email)

        const passwordMatch = await compare(password, user.password)
            console.log(password)
        if(!user)
            throw new Error("Email or password incorrect 🥴")
        if(!passwordMatch)
            throw new Error("Email or password incorrect 🥴")
       
        const token = sign({},"6fbf7410c6eedc23d24fa27322e606e9",{
            subject: user.id,
            expiresIn: "1d"
        })
        
        const tokenReturn: IResponse = {
            token,
            user:{
                name: user.name,
                email: user.email
            }
        }
        
        return tokenReturn
        
    }
}

export { AuthenticateUserUseCase }
import {Request, Response} from 'express'
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase'

class CraeteSpecificationController{
    constructor(private createSpecificationUseCase: CreateSpecificationUseCase){            
    } 
    handle(request: Request, response: Response):Response{

        const{name, description} = request.body
        this.createSpecificationUseCase.execute({name,description})
        
        return response.status(201).send("Created ✔💭 !")

    }
}

export {CraeteSpecificationController}

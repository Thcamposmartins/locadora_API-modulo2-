import {Request, Response} from 'express'
import { container } from 'tsyringe'
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase'

class CraeteSpecificationController{
    handle(request: Request, response: Response):Response{

        const{name, description} = request.body
        const createSpecificationUseCase = container.resolve(CreateSpecificationUseCase)
        createSpecificationUseCase.execute({name,description})
        
        return response.status(201).send("Created ✔💭 !")

    }
}

export {CraeteSpecificationController}

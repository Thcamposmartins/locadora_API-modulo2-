import {Request, Response} from 'express'
import { CreateCategoryUseCase } from './CreateCategoryUseCase'

class CraeteCategoryController{
    constructor(private createCategoryUseCase: CreateCategoryUseCase){            
    } 
    handle(request: Request, response: Response):Response{

        const{name, description} = request.body

        this.createCategoryUseCase.execute({name,description})
        
        return response.status(201).send("Created 🚗🚕🚓!")

    }
}

export {CraeteCategoryController}

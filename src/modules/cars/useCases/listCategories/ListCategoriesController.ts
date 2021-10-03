import {Request, Response} from 'express'
import { ListCategoriesUseCase } from '../listCategories/ListCategoriesUseCase'

class ListCategoriesController{
    constructor(private listCategoryesUseCase: ListCategoriesUseCase){            
    } 

    handle(request: Request, response: Response):Response{        
        const all = this.listCategoryesUseCase.execute()
        return response.json(all)
    }
}

export {ListCategoriesController}
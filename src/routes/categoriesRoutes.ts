import { Router } from 'express'
import { CategoriesRepository } from '../repositories/CategoriesRoposotory'
import { CreateCategoryService } from '../services/CreateCategoryService'

const categoriesRoutes = Router()
const categoriesRepository = new CategoriesRepository()

categoriesRoutes.post('/', (request, response)=>{
    const{name, description} = request.body

    const createCategoryService = new CreateCategoryService(categoriesRepository)
    createCategoryService.execute({name,description})
    
    return response.status(201).send("Created 🚗🚕🚓!")
})

categoriesRoutes.get("/",(request, response)=>{

    const all = categoriesRepository.list()
    return response.json(all)

})

export {categoriesRoutes}

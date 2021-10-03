import { Router } from 'express'

import { craeteCategoryController } from '../modules/cars/useCases/createCategory'
import { listCategoriesController } from '../modules/cars/useCases/listCategories'

const categoriesRoutes = Router()

categoriesRoutes.post('/', (request, response)=>{
    craeteCategoryController.handle(request,response)
})

categoriesRoutes.get("/",(request, response)=>{
    listCategoriesController.handle(request,response)
})

export {categoriesRoutes}

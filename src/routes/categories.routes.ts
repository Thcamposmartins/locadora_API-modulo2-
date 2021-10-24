import { Router } from 'express'
import multer from 'multer'

import { CraeteCategoryController} from '../modules/cars/useCases/createCategory/CreateCategoryController'
import { ListCategoriesController } from '../modules/cars/useCases/listCategories/ListCategoriesController'
import { ImportCategoryController } from '../modules/cars/useCases/importCategory/ImportCategoryController'

const craeteCategoryController = new CraeteCategoryController()
const importCategoryController = new ImportCategoryController()
const listCategoriesController = new ListCategoriesController()



const categoriesRoutes = Router()
const upload = multer({
    dest: "./tmp",
})

categoriesRoutes.post('/',craeteCategoryController.handle)

categoriesRoutes.get("/",listCategoriesController.handle)

categoriesRoutes.post("/import",upload.single("file"), importCategoryController.handle)

export {categoriesRoutes}

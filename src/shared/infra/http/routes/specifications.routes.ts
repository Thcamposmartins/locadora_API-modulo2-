import { Router } from 'express'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

import { CraeteSpecificationController } from '../../../../modules/cars/useCases/createSpecification/CreateSpecificationController'
import { ListSpecificationController } from '../../../../modules/cars/useCases/listSpecification/ListSpecificationController'

const specificationRoutes = Router()
const craeteSpecificationController = new CraeteSpecificationController()
const listSpecificationController = new ListSpecificationController()

specificationRoutes.use(ensureAuthenticated)

specificationRoutes.post("/", craeteSpecificationController.handle)

specificationRoutes.get("/",listSpecificationController.handle)

export {specificationRoutes}

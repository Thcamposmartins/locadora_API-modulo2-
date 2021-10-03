import { Router } from 'express'

import { craeteSpecificationController } from '../modules/cars/useCases/createSpecification'
import { listSpecificationController } from '../modules/cars/useCases/listSpecification'

const specificationRoutes = Router()

specificationRoutes.post('/', (request, response)=>{
    craeteSpecificationController.handle(request,response)
})

specificationRoutes.get("/",(request, response)=>{
    listSpecificationController.handle(request,response)

})

export {specificationRoutes}

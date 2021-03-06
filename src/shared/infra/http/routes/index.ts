import { Router } from 'express'
import { authenticationRoutes } from './authenticate.routes'
import { categoriesRoutes } from './categories.routes'
import { specificationRoutes } from './specifications.routes'
import { userRouter } from './users.routes'


const router = Router()

router.use("/categories", categoriesRoutes)
router.use("/specifications", specificationRoutes )
router.use("/users", userRouter )
router.use( authenticationRoutes )



export { router }

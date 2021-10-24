import { Router } from 'express'
import { CraeteUserController } from '../modules/accounts/useCases/createUser/CreateUserController'

const userRouter = Router()

const craeteUserController = new CraeteUserController()

userRouter.post("/",craeteUserController.handle)

export { userRouter }

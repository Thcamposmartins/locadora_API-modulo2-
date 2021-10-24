import { Router } from 'express'
import { AuthenticateUserController } from '../modules/accounts/useCases/authenticateUser/AuthenticationUserController'

const authenticateUserController = new AuthenticateUserController()
const authenticationRoutes = Router()

authenticationRoutes.post("/sessions", authenticateUserController.handle)

export {authenticationRoutes}
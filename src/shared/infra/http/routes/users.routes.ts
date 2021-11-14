import { Router } from 'express'
import multer from 'multer'
import uploadConfig from '../../../../config/upload'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
import { CraeteUserController } from '../../../../modules/accounts/useCases/createUser/CreateUserController'
import { UpdateUserAvatarController } from '../../../../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController'

const userRouter = Router()
const uploadAvatar = multer(uploadConfig.upload(".tmp/avatar"))

const craeteUserController = new CraeteUserController()
const updateUserAvatarController = new UpdateUserAvatarController()

userRouter.post("/",craeteUserController.handle)
userRouter.patch("/avatar",
                ensureAuthenticated,
                uploadAvatar.single("avatar"), 
                updateUserAvatarController.handle)

export { userRouter }

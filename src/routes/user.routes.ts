import { Router } from "express"
import { createUserController, deleteUserController, listUserController, listUsersController, updateUserController } from "../controllers/users.controllers"

const userRouter = Router()

userRouter.post('', createUserController)
userRouter.get('', listUsersController)
userRouter.get('/:id', listUserController)
userRouter.patch('/:id', updateUserController)
userRouter.delete('/:id', deleteUserController)

export default userRouter
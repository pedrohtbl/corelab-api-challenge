import { Request, Response } from "express"
import createUserService from "../services/Users/createUser.service"
import { instanceToPlain } from "class-transformer"
import listUsersServices from "../services/Users/listUsers.service"

export const createUserController = async (req: Request, res: Response) =>{
  try {
    const user = req.body
    const createdUser = await createUserService(user)
    return res.status(201).json(instanceToPlain(createdUser))

  } catch (error) {
    if(error instanceof Error){
      return res.status(400).json({
        message: error.message
      })
    }
  }
}

export const listUsersController = async (req: Request, res: Response) =>{
  try {
    const users = await listUsersServices()
    return res.status(200).json(instanceToPlain(users))

  } catch (error) {
    if(error instanceof Error){
      return res.status(400).json({
        message: error.message
      })
    }
  }
}

export const listUserController = async (req: Request, res: Response) =>{

}

export const updateUserController = async (req: Request, res: Response) =>{

}

export const deleteUserController = async (req: Request, res: Response) =>{

}
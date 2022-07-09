import { Request, Response } from "express"
import loginService from "../services/Session/login.service"

export const sessionController = async (req: Request, res: Response) =>{
  try {
    const user = req.body
    const token = await loginService(user)

    return res.status(200).json({token})
    
  } catch (error) {
    if(error instanceof Error){
      return res.status(400).json({
        message: error.message
      })
    }
  }
}
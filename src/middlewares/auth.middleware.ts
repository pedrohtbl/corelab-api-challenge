import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

const auth = (req: Request, res: Response, next:NextFunction) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]

    jwt.verify(
      token as string,
      process.env.SECRET_KEY as string,
      (error:any, decoded:any) =>{
        req.userId = decoded.id
      })

    next()

  } catch (error) {
    return res.status(401).json({
      message: "Invalid token"
    })
  }
}

export default auth
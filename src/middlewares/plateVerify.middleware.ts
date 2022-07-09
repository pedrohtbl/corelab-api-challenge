import { Request, Response, NextFunction } from "express"
import { AppDataSource } from "./../data-source"
import { Vehicle } from "../entities/vehicle.entity"

const plateVerify = async (req: Request, res: Response, next: NextFunction) =>{
  const plate = req.body.plate
  const vehicleRepository = AppDataSource.getRepository(Vehicle)

  const vehicle = await vehicleRepository.findOneBy({plate})

  if(vehicle){
    return res.status(400).json({
      message: "There is already a vehicle with this plate"
    })
  }

  next()
}

export default plateVerify
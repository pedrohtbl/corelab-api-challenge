import { AppDataSource } from "../../data-source"
import { Vehicle } from "../../entities/vehicle.entity"

const listVehicleService = async (id: string): Promise<Vehicle> =>{
  const vehicleRepository = AppDataSource.getRepository(Vehicle)

  const vehicle = await vehicleRepository.findOne({
    where:{
      id: id
    }
  })

  if(!vehicle){
    throw new Error("Vehicle not found")
  }

  return vehicle

}

export default listVehicleService
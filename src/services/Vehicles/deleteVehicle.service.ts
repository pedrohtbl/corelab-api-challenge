import { AppDataSource } from "../../data-source"
import { Vehicle } from "../../entities/vehicle.entity"

const deleteVehicleService = async (id: string, userId: string): Promise<void>=>{
  const vehicleRepository = AppDataSource.getRepository(Vehicle)

  const vehicle = await vehicleRepository.findOneBy({id})

  if(!vehicle){
    throw new Error("vehicle not found")
  }

  if(vehicle.user.id !== userId){
    throw new Error("you can't delete this vehicle")
  }

  await vehicleRepository.delete({id})

}

export default deleteVehicleService
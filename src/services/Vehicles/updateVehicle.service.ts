import { AppDataSource } from "../../data-source";
import { Vehicle } from "../../entities/vehicle.entity";
import { IUpdateVehicle } from "../../interfaces/vehicle.interfaces";

const updateVehicleService = async (id: string, userId: string, newVehicle: IUpdateVehicle): Promise<Vehicle | null>=>{
  const vehicleRepository = AppDataSource.getRepository(Vehicle)

  const vehicle = await vehicleRepository.findOneBy({id})

  if(!vehicle){
    throw new Error("vehicle not found")
  }

  if(vehicle.user.id !== userId){
    throw new Error("you can't edit this vehicle")
  }

  await vehicleRepository.update({id}, newVehicle)

  const updatedVehicle = await vehicleRepository.findOneBy({id})

  return updatedVehicle
}

export default updateVehicleService
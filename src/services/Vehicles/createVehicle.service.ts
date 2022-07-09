import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"
import { Vehicle } from "../../entities/vehicle.entity"
import { IVehicle } from "../../interfaces/vehicle.interfaces"

const createVehiclesService = async (vehicle: IVehicle, userId: string): Promise<Vehicle> =>{
  const vehicleRepository = AppDataSource.getRepository(Vehicle)
  const userRepository = AppDataSource.getRepository(User)

  const user = await userRepository.findOne({
    where: {
      id: userId
    }
  }) 

  if(user){
    vehicle = {...vehicle, user}
  }
 
  const newVehicle =  vehicleRepository.create(vehicle)

  await vehicleRepository.save(newVehicle)

  return newVehicle

}

export default createVehiclesService
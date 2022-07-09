import { AppDataSource } from "../../data-source"
import { Vehicle } from "../../entities/vehicle.entity"

const listVehiclesService = async (): Promise<Vehicle[]> => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle)

  const vehicles = await vehicleRepository.find()

  return vehicles
}

export default listVehiclesService
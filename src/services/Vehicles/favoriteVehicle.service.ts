import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"

const favoriteVehicleService = async (vehicleId: string, userId: string):Promise<User | null> =>{
  const userRepository = AppDataSource.getRepository(User)

  await AppDataSource
  .createQueryBuilder()
  .relation(User, "favorite_vehicles").of(userId).add(vehicleId)

  const userFavorite = await userRepository
  .createQueryBuilder('user')
  .leftJoinAndSelect('user.favorite_vehicles', 'f')
  .where('user.id = :id', {id: userId})
  .getOne()

  return userFavorite
  
}

export default favoriteVehicleService
import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user.entity"

const listUsersServices = async (): Promise<User[]> =>{
  const userRepository = AppDataSource.getRepository(User)

  const users = await userRepository
  .createQueryBuilder('user')
  .leftJoinAndSelect('user.vehicles', 'u')
  .leftJoinAndSelect('user.favorite_vehicles', 'f')
  .getMany()

  return users
}

export default listUsersServices
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { ICreatedUser, IUser } from "../../interfaces/user.interfaces";
import * as bcrypt from "bcryptjs"

const createUserService = async (user:IUser): Promise<ICreatedUser>  =>{
  const userRepository = AppDataSource.getRepository(User)

  const {email,password} = user

  const userAlreadyExists = await userRepository.findOneBy({email})

  if(userAlreadyExists){
    throw new Error("User Already Exists")
  }

  user.password = await bcrypt.hash(password, 10)

  const newUser = userRepository.create(user)
  await userRepository.save(newUser)

  const joinedUser = await userRepository
  .createQueryBuilder('user')
  .leftJoinAndSelect('user.favorite_vehicles', 'favorites')
  .leftJoinAndSelect("user.vehicles", "u")
  .where("user.email = :email", {email: user.email})
  .getOne()

  if(!joinedUser){
    throw new Error("Something went wrong")
  }
  
  return joinedUser

}

export default createUserService
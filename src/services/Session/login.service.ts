import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { ILogin, IToken } from "../../interfaces/login.interfaces";
import * as bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const loginService = async (user: ILogin): Promise<IToken> => {
  const userRepository = AppDataSource.getRepository(User)

  const {email, password} = user

  const findUser = await userRepository.findOneBy({email})

  if(!findUser){
    throw new Error("Wrong Email or Password")
  }

  const compare = await bcrypt.compare(password, findUser.password)

  if(!compare){
    throw new Error("Wrong Email or Password")
  }

  const token = jwt.sign(
    {id: findUser.id},
    String(process.env.SECRET_KEY),
    {expiresIn: '1h'} 
  )

  return {token, id: findUser.id}
}

export default loginService
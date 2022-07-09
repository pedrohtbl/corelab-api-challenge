import { Vehicle } from "../entities/vehicle.entity";

export interface IUser {
  name: string;
  email: string;
  password: string;
}

export interface ICreatedUser extends IUser{
  created_at: Date;
  id: string;
}
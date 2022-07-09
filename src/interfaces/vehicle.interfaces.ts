import { User } from "../entities/user.entity";

export interface IVehicle {
    name: string;
    model:string;
    description: string;
    plate: string;
    year: number;
    color: string;
    price: number;
    user: User
}

export interface ICreatedVehicle extends IVehicle{
    id: string;
    created_at: Date;
}

export interface IUpdateVehicle{
    name?: string;
    model?:string;
    description?: string;
    plate?: string;
    year?: number;
    color?: string;
    price?: number;
}
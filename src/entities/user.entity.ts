import { Entity, PrimaryGeneratedColumn, CreateDateColumn, Column, Unique, OneToMany, ManyToMany, JoinTable} from "typeorm"
import { Exclude } from "class-transformer"
import { Vehicle } from "./vehicle.entity";

@Entity('users')
@Unique(['email'])

export class User{
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string

  @Column()
  @Exclude()
  password: string;

  @CreateDateColumn()
  created_at: Date

  @OneToMany((type)=> Vehicle, vehicle => vehicle.user)
  vehicles: Vehicle[]
  
  @ManyToMany(type => Vehicle, vehicle => vehicle.user)
  @JoinTable({
    name: "favorites",
    joinColumn:{
      name: "user",
      referencedColumnName: "id"
    },
    inverseJoinColumn:{
      name: "favorite_vehicle",
      referencedColumnName: "id"
    }
  })
  favorite_vehicles: Vehicle[]
}
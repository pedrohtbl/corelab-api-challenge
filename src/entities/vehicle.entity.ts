import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, Unique, ManyToOne, ManyToMany,} from "typeorm"
import { User } from "./user.entity";

@Entity('vehicles')
@Unique(['plate'])

export class Vehicle{
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column()
  name: string;

  @Column()
  model: string;

  @Column()
  description: string;

  @Column()
  plate: string;

  @Column({type: "integer"})
  year: number;

  @Column()
  color: string;

  @Column({type: "decimal", precision: 15, scale: 2})
  price: number;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne((type)=> User, user => user.vehicles, {eager: true})
  user: User

  @ManyToMany((type) => User, (user) => user.favorite_vehicles)
  users: User[]
}

import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { IRole } from "../interfaces/IRole"

@Entity()
export class Role implements IRole {

    @PrimaryGeneratedColumn()
    id: number

    @Column({name: 'role_name'})
    roleName: string
}

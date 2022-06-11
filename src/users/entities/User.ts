import { Role } from "src/roles/entities/Role"
import { IRole } from "src/roles/interfaces/IRole"
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm"
import { IUser } from "../interfaces/IUser"

@Entity()
export class User implements IUser {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @Column()
    password: string

    @Column()
    email: string

    @Column({ name: 'role_id' })
    roleId: number

    @ManyToOne(() => Role)
    @JoinColumn({ name: 'role_id', referencedColumnName: 'id' })
    role?: IRole

}

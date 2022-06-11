import { IUser } from "./IUser";


export interface IUserService {
  create(data: IUser): Promise<IUser>

  findAll(): Promise<IUser[]>

  findById(id: number): Promise<IUser>

  update(id: number, data: IUser): Promise<boolean>

  remove(id: number): Promise<boolean>

  findOneByName(username: string): Promise<IUser>
}
import { IUser } from "./IUser";


export interface IUserService {
  create(data: IUser): Promise<IUser>

  findAll(): Promise<IUser[]>

  findById(id: number): Promise<IUser>

  update(id: number, data: any): Promise<boolean>

  remove(id: number): Promise<boolean>

  findOneByName(username: string): Promise<IUser>
}
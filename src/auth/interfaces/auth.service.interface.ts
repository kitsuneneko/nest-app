import { IUser } from "src/users/interfaces/IUser"
export interface IAuthService {

  validateUser(username: string, pass: string): Promise<any>

  login(user: any): Promise<any>

  registration(user: any): Promise<any>
}
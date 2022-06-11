
export interface IAuthService {

  validateUser(username: string, pass: string): Promise<any>

  login(user: any)
}

import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/services/UserService'
import { JwtService } from '@nestjs/jwt';
import { EncodingHelper } from 'src/shared/encoding.helper';
import { IAuthService } from '../interfaces/auth.service.interface';
import { IUser } from 'src/users/interfaces/IUser';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private encodingHelper: EncodingHelper
  ) {}

    private async comparePassword(password: string, hashPass: string): Promise<boolean> {
      return await this.encodingHelper.compareData(password,hashPass);
    }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findOneByName(username);
    if (user) {
      const isMatch = await this.comparePassword(pass, user.password);
      if (isMatch) {
        const { password, ...result } = user;
        return result;
      }
    }
    return null;
  }

  async login(user: any): Promise<any> {
    const payload = { username: user.username, sub: user.userId };
    return await {
      access_token: this.jwtService.sign(payload),
    };
  }

  async registration(data: IUser): Promise<IUser> {
    data.roleId = 2;
    return await this.userService.create(data);
  };
}


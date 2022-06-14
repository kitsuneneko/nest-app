import { IsEmail, IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";
import { IUser } from "../interfaces/IUser";

export class CreateUserDto implements IUser{

  @IsString()
  @IsNotEmpty()
  @MaxLength(256, { message: 'Username is too long'})
  username: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(25, { message: 'Password is too long'})
  password: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNumber()
  roleId: number;
}

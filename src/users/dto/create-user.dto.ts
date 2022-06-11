import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";
import { IUser } from "../interfaces/IUser";
// export class CreateUserDto {}

export class CreateUserDto implements IUser {
  @IsString()
  @IsNotEmpty()
  @MaxLength(256, { message: 'Username is too long'})
  username: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(256, { message: 'Username is too long'})
  password: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNumber()
  @IsOptional()
  roleId: number;
}

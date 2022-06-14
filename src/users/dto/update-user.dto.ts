import { PartialType } from '@nestjs/mapped-types';
import { IUser } from '../interfaces/IUser';
import { CreateUserDto } from './create-user.dto';
export class UpdateUserDto extends PartialType(CreateUserDto) {}



// export class UpdateUserDto extends PartialType(CreateUserDto) {
//   @IsString()
//   @IsNotEmpty()
//   @MaxLength(256, { message: 'Username is too long'})
//   username: string;

//   @IsString()
//   @IsNotEmpty()
//   @MaxLength(256, { message: 'Username is too long'})
//   password: string;

//   @IsEmail()
//   @IsNotEmpty()
//   email: string;

//   @IsNumber()
//   @IsOptional()
//   roleId: number;
// }

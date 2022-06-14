import { IsOptional } from 'class-validator';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
export class RegistrationDto extends CreateUserDto {

  @IsOptional()
  roleId: number;
}
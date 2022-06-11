import { Body, Controller, Delete, Get, Inject, Param, ParseIntPipe, Patch, Post, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { CreateUserDto } from "../dto/create-user.dto";
import { User } from "../entities/User";
import { IUser } from "../interfaces/IUser";
import { IUserService } from "../interfaces/IUserService";
import { UserService } from "../services/UserService";

@UseGuards(JwtAuthGuard)
@Controller('user')
export class UserController {
  constructor(
    @Inject(UserService)
    private readonly userService: IUserService,
  ) {}

  @Get('all')
  async findAll(): Promise<IUser[]> {
    return await this.userService.findAll();
  }

  @Get(':id')
  async findById(@Param('id', ParseIntPipe) id: number): Promise<IUser> {
    return await this.userService.findById(id);
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<IUser> {
    return await this.userService.create(createUserDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<string> {
    await this.userService.remove(id);
    return `Successfully deleted user with id: ${id}`;
  }

  @Patch(':id')
  async update( 
    @Param('id', ParseIntPipe) id: number, 
    @Body() data: User 
    ): Promise<string> {
      const result =  await this.userService.update(id, data);
      return `Successfully updated user with id: ${id}`;
  }

}
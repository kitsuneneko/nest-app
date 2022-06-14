import { Body, Controller, Delete, Get, Inject, Param, ParseIntPipe, Patch, Post, Request, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { Roles } from "src/roles/decorators/roles.decorator";
import { RolesGuard } from "src/roles/guards/roles.guard";
import { CreateUserDto } from "../dto/create-user.dto";
import { UpdateUserDto } from "../dto/update-user.dto";
import { IUser } from "../interfaces/IUser";
import { IUserService } from "../interfaces/IUserService";
import { UserService } from "../services/UserService";

@UseGuards(RolesGuard)
@UseGuards(JwtAuthGuard)
@Controller()
export class UserController {
  constructor(
    @Inject(UserService)
    private readonly userService: IUserService,
  ) {}

  // @Roles('admin')
  @Get('user/all')
  async findAll(@Request() req): Promise<IUser[]> {
    return await this.userService.findAll();
  }

  @Roles('admin')
  @Get('user/:id')
  async findById(@Param('id', ParseIntPipe) id: number): Promise<IUser> {
    return await this.userService.findById(id);
  }

  @Roles('admin')
  @Post('user')
  async create(@Body() createUserDto: CreateUserDto): Promise<IUser> {
    return await this.userService.create(createUserDto);
  }

  @Roles('admin')
  @Delete('user/:id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<string> {
    await this.userService.remove(id);
    return `Successfully deleted user with id: ${id}`;
  }

  @Roles('admin')
  @Patch('user/:id')
  async update( 
    @Param('id', ParseIntPipe) id: number, 
    @Body() updateUserDto: UpdateUserDto 
    ): Promise<string> {
      const result =  await this.userService.update(id, updateUserDto);
      return `Successfully updated user with id: ${id}`;
  }

  @Get('current/profile')
  getProfile(@Request() req) {
    return req.user;
  }


  @Delete('current/delete')
  async removeCurrent(@Request() req): Promise<string> {
    const id = req.user.userId;
    await this.userService.remove(id);
    return `Your account successfully deleted.`;
  }

  @Patch('current/update')
  async updateCurrent( 
    @Request() req, 
    @Body() updateUserDto: UpdateUserDto 
    ): Promise<string> {
      const id = req.user.userId;
      const result =  await this.userService.update(id, updateUserDto);
      return `Your account successfully updated.`;
  }



}
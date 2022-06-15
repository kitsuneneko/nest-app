
import { Controller, Get, Request, Post, UseGuards, Body, Inject } from '@nestjs/common';
import { RegistrationDto } from '../dto/registration.dto';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { LocalAuthGuard } from '../guards/local-auth.guard';
import { IAuthService } from '../interfaces/auth.service.interface';
import { AuthService } from '../services/auth.service';

@Controller()
export class AuthController {
  constructor(
    @Inject(AuthService)
    private authService: IAuthService
    ) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('auth/registration')
  async registration(@Body() registrationDto: RegistrationDto) {
    return this.authService.registration(registrationDto);
  }

}

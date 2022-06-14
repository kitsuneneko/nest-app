import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from 'src/db/database.module';
import { SharedModule } from 'src/shared/shared.module';
import { UserController } from './controllers/UserController';
import { User } from './entities/User';
import { UserRepository } from './repositories/UserRepository';
import { UserService } from './services/UserService';

@Module({
  imports:[
    DatabaseModule,
    SharedModule,
    TypeOrmModule.forFeature([User]),
],
  controllers:[UserController],
  providers:[UserService, UserRepository],
  exports: [UserService]
})
export class UsersModule {}

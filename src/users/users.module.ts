import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from 'src/roles/entities/Role';
import { SharedModule } from 'src/shared/shared.module';
import { UserController } from './controllers/UserController';
import { User } from './entities/User';
import { UserRepository } from './repositories/UserRepository';
import { UserService } from './services/UserService';

@Module({
  imports:[
    SharedModule,
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: null,
      database: "userdb",
      entities: [User, Role],
      synchronize: true,
    })
],
  controllers:[UserController],
  providers:[UserService, UserRepository],
  exports: [UserService]
})
export class UsersModule {}


import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from 'src/roles/entities/Role';
import { User } from 'src/users/entities/User';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: null,
      database: "userdb",
      entities: [User, Role],
      synchronize: true,
      migrations: ['dist/db/migration/*.js'],
      migrationsRun: true,
      
    }),
  ],
})

export class DatabaseModule {}
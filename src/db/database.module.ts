
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/User';
// import { AppDataSource } from './data-source';

// @Module({
//   providers: [...AppDataSource],
//   exports: [...AppDataSource],
// })
// export class DatabaseModule {}

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: null,
      database: "userdb",
      entities: [User],
      synchronize: true,
    }),
  ],
})

export class DatabaseModule {}
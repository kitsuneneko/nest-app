
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './entities/Role';

@Module({
  imports: [TypeOrmModule.forFeature([Role])]
})
export class RolesModule {}

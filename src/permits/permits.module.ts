import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermitsService } from './permits.service';
import { PermitsController } from './permits.controller';
import { Permit } from './entities/permit.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Permit])],
  controllers: [PermitsController],
  providers: [PermitsService],
})
export class PermitsModule {}

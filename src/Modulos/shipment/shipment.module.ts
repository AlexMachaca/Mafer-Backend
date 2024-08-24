import { Module } from '@nestjs/common';
import { ShipmentController } from './shipment.controller';
import { ShipmentService } from './shipment.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shipment } from './entity/ShipmentEntity.entity';
import { User } from '../user/entity/UserEntity.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Shipment]),TypeOrmModule.forFeature([User])
  ],
  controllers: [ShipmentController],
  providers: [ShipmentService]
})
export class ShipmentModule {}

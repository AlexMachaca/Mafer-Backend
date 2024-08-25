import { Module } from '@nestjs/common';
import { SaleController } from './sale.controller';
import { SaleService } from './sale.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sale } from './entity/SaleEntity.entity';
import { Cart } from '../cart/entity/CartEntity.entity';
import { User } from '../user/entity/UserEntity.entity';
import { CloudinaryService } from 'src/ServicesCloud/cloudinary/cloudinary.service';
import { AuthValidateService } from '../auth-validate/auth-validate.service';
import { ValidateEmailSmsEntity } from '../auth-validate/entity/ValidateEmialSms.entity';
import { Product } from '../product/entity/ProductEntity.entity';
import { CartItem } from '../cart/entity/CartItem.entity';
import { Shipment } from '../shipment/entity/ShipmentEntity.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Sale],),TypeOrmModule.forFeature([Cart]),TypeOrmModule.forFeature([CartItem]),TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([ValidateEmailSmsEntity]),TypeOrmModule.forFeature([Product]),TypeOrmModule.forFeature([Shipment])
  ],
  controllers: [SaleController],
  providers: [SaleService,AuthValidateService,CloudinaryService],
})
export class SaleModule {}

import { Module } from '@nestjs/common';
import { SaleController } from './sale.controller';
import { SaleService } from './sale.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sale } from './entity/SaleEntity.entity';
import { Cart } from '../cart/entity/CartEntity.entity';
import { User } from '../user/entity/UserEntity.entity';
import { CloudinaryService } from 'src/ServicesCloud/cloudinary/cloudinary.service';
import { AuthValidateService } from '../auth-validate/auth-validate.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Sale],),TypeOrmModule.forFeature([Cart]),TypeOrmModule.forFeature([User])
  ],
  controllers: [SaleController],
  providers: [SaleService,AuthValidateService,CloudinaryService],
})
export class SaleModule {}

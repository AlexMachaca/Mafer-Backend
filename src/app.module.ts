import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './modulos/product/product.module';
import { UserModule } from './modulos/user/user.module';
import { ShipmentModule } from './modulos/shipment/shipment.module';
import { SaleModule } from './modulos/sale/sale.module';
import { CloudinaryService } from './ServicesCloud/cloudinary/cloudinary.service';

@Module({
  imports: [ProductModule, UserModule, ShipmentModule, SaleModule],
  controllers: [],
  providers: [CloudinaryService],
})
export class AppModule {}

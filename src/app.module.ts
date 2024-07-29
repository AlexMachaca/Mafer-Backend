import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './modulos/product/product.module';
import { UserModule } from './modulos/user/user.module';
import { ShipmentModule } from './modulos/shipment/shipment.module';
import { SaleModule } from './modulos/sale/sale.module';

@Module({
  imports: [ProductModule, UserModule, ShipmentModule, SaleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

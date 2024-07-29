import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './modulos/product/product.module';
import { UserModule } from './modulos/user/user.module';
import { ShipmentModule } from './modulos/shipment/shipment.module';
import { SaleModule } from './modulos/sale/sale.module';
import { CloudinaryService } from './ServicesCloud/cloudinary/cloudinary.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3307,
    username: 'root',
    password: '',
    database: 'db_mafer',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true
}),ProductModule, UserModule, ShipmentModule, SaleModule],
  controllers: [],
  providers: [CloudinaryService],
})
export class AppModule {}

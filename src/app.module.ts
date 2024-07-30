import { Module } from '@nestjs/common';

import { ProductModule } from './modulos/product/product.module';
import { UserModule } from './modulos/user/user.module';
import { ShipmentModule } from './modulos/shipment/shipment.module';
import { SaleModule } from './modulos/sale/sale.module';
import { CloudinaryService } from './ServicesCloud/cloudinary/cloudinary.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartModule } from './Modulos/cart/cart.module';
import { AuthValidateModule } from './Modulos/auth-validate/auth-validate.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3307,
    username: 'root',
    password: '',
    database: 'db_mafer',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true
}),ProductModule, UserModule, ShipmentModule, SaleModule,CartModule,AuthValidateModule],
  controllers: [],
  providers: [CloudinaryService],
})
export class AppModule {}

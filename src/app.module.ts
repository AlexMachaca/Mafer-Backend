import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './modulos/product/product.module';
import { UserModule } from './modulos/user/user.module';

@Module({
  imports: [ProductModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

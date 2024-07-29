import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entity/ProductEntity.entity';
import { CloudinaryService } from 'src/ServicesCloud/cloudinary/cloudinary.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product])
  ],
  controllers: [ProductController],
  providers: [ProductService,CloudinaryService]
})
export class ProductModule {}

import { Injectable } from '@nestjs/common';

import { Repository } from 'typeorm';
import { Product } from '../product/entity/ProductEntity.entity';
import { CreateProductRequest } from '../product/request/CreateProductRequest.request';
import { Cart } from './entity/CartEntity.entity';
import { CartItem } from './entity/CartItem.entity';
import { CreateCartRequest } from './request/CreateCartRequest';
import { User } from '../user/entity/UserEntity.entity';

@Injectable()
export class CartService {
}

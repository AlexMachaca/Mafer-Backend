import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartRequest } from './request/CreateCartRequest';

@Controller('api/cart')
export class CartController {
}

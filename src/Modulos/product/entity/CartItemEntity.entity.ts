import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ShoppingCart } from "./ShoppingCartEntity.entity";
import { Product } from "./ProductEntity.entity";

@Entity()
export class CartItem {
  @PrimaryGeneratedColumn()
  IdCartItem: number;

  @ManyToOne(() => ShoppingCart, (shoppingCart) => shoppingCart.CartItems)
  @JoinColumn({ name: 'shoppingCartId' })
  ShoppingCart: ShoppingCart;

  @ManyToOne(() => Product, (product) => product.CartItems)
  @JoinColumn({ name: 'productId' })
  Product: Product;

  @Column('int')
  Quantity: number;

  @Column('date')
  DateAdded: string;
}
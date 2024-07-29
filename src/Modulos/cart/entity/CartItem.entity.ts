import { Product } from "src/modulos/product/entity/ProductEntity.entity";
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm";
import { Cart } from "./CartEntity.entity";

@Entity()
export class CartItem {
  @PrimaryGeneratedColumn()
  IdCartItem: number;

  @ManyToOne(() => Cart, cart => cart.Items)
  Cart: Cart;

  @ManyToOne(() => Product)
  Product: Product;

  @Column()
  Quantity: number;

  @Column('date')
  DateAdded: Date;
}
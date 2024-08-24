import { CartItem } from "src/Modulos/cart/entity/CartItem.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  IdProduct: number;

  @Column()
  Name: string;

  @Column()
  Description: string;

  @Column()
  NutritionalInformation: string;

  @Column('double')
  Price: number;

  @Column()
  UrlImage: string;

  @Column({ default: true })
  Visible: boolean;

  @Column()
  Stock: number;

  @OneToMany(() => CartItem, (cartItem) => cartItem.Product)
  CartItems: CartItem[];

  @Column({ default: true })
  Deleted: boolean;
}
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CartItem } from "./CartItemEntity.entity";

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

  @OneToMany(() => SaleDetail, (saleDetail) => saleDetail.Product)
  SaleDetails: SaleDetail[];
}
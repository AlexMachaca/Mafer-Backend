import { Product } from "src/Modulos/product/entity/ProductEntity.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Sale } from "./SaleEntity.entity";

@Entity()
export class SaleDetail {
  @PrimaryGeneratedColumn()
  IdDetail: number;


  @ManyToOne(() => Product, (product) => product.SaleDetails)
  @JoinColumn({ name: 'productId' })
  Product: Product;

  @Column('int')
  Quantity: number;

  @Column('int')
  UnitPrice: number;
}
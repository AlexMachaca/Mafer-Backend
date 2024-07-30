import { Cart } from "src/Modulos/cart/entity/CartEntity.entity";
import { User } from "src/Modulos/user/entity/UserEntity.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Sale {
  @PrimaryGeneratedColumn()
  IdSales: number;

  @ManyToOne(() => User, (user) => user.Sales)
  @JoinColumn({ name: 'userId' })
  Client: User;

  @Column()
  ShippingMethod:boolean;

  @Column()
  PaymentMethod:boolean;

  @Column()
  PaymentNumber:string;

  @Column()
  CardNumber:string;

  @Column()
  Process:boolean;

  @Column('date')
  SaleDate: Date;

  @Column('double')
  Total: number;

  @ManyToOne(() => Cart, (cart) => cart.Sales)
  @JoinColumn({ name: 'cartId' })
  Cart: Cart;

  @Column()
  idShipment:number;

  @Column()
  ImagePayment: string;
}

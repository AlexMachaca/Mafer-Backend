import { Cart } from "src/Modulos/cart/entity/CartEntity.entity";
import { User } from "src/Modulos/user/entity/UserEntity.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Sale {
  @PrimaryGeneratedColumn()
  IdSales: number;

  @ManyToOne(() => User, (user) => user.Sales)
  @JoinColumn({ name: 'clientId' })
  Client: User;

  @Column('date')
  SaleDate: string;

  @Column('double')
  Total: number;

  @ManyToOne(() => Cart, (cart) => cart.Sales)
  @JoinColumn({ name: 'cartId' })
  Cart: Cart;


}

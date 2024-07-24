import { ShoppingCart } from "src/Modulos/product/entity/ShoppingCartEntity.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  IdUser: number;

  @Column()
  FirstName: string;

  @Column()
  LastName: string;

  @Column()
  Dni: string;

  @Column()
  Address: string;

  @Column()
  Phone: string;

  @Column()
  Mail: string;

  @Column()
  Password: string;

  @Column('int')
  Rol: number;

  @Column()
  BirthDate: Date;

  @OneToMany(() => ShoppingCart, (shoppingCart) => shoppingCart.User)
  ShoppingCarts: ShoppingCart[];

  @OneToMany(() => Sale, (sale) => sale.Client)
  Sales: Sale[];
}
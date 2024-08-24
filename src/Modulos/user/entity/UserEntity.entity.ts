import { Cart } from "src/Modulos/cart/entity/CartEntity.entity";
import { Sale } from "src/Modulos/sale/entity/SaleEntity.entity";
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

  @Column({ type: 'date', nullable: true })
  BirthDate: Date;

  @Column()
  DateCreated: Date;

  @OneToMany(() => Sale, (sale) => sale.Client)
  Sales: Sale[];

  @OneToMany(() => Cart, cart => cart.User)
  Carts: Cart[];

  @Column()
  Deleted:boolean;
}
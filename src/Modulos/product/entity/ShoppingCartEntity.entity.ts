import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "src/modulos/user/entity/UserEntity.entity";


@Entity()
export class ShoppingCart {
  @PrimaryGeneratedColumn()
  IdCart: number;

  @ManyToOne(() => User, (user) => user.ShoppingCarts)
  @JoinColumn({ name: 'userId' })
  User: User;

  @Column('date')
  Date: string;

}
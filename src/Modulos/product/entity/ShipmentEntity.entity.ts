import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Shipment {
  @PrimaryGeneratedColumn()
  IdShipment: number;

  @Column()
  IdClient: string;

  @ManyToOne(() => Sale, (sale) => sale.Shipments)
  @JoinColumn({ name: 'saleId' })
  Sale: Sale;

  @Column()
  Company: string;

  @Column()
  Province: string;

  @Column()
  District: string;

  @Column()
  Address: string;
}
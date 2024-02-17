import { Permit } from 'src/permits/entities/permit.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  owner: string;

  @Column()
  tokenAddress: string;

  @Column()
  tokenAmount: string;

  @Column()
  price: string;

  @OneToOne(() => Permit)
  permit: Permit;
}

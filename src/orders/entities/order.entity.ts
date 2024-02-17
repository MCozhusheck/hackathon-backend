import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}

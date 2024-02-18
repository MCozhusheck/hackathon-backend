import { Permit } from 'src/permits/entities/permit.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

export enum OrderStatus {
  Created,
  OwnerApproved,
  PpraApproved,
  Hidden,
  Done,
  Removed,
}

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User)
  owner: User;

  @Column()
  tokenAddress: string;

  @Column()
  shares: string;

  @Column()
  price: string;

  @OneToOne(() => Permit)
  permit: Permit;

  @Column({
    type: 'enum',
    enum: OrderStatus,
    default: OrderStatus.Created,
  })
  status: OrderStatus;
}

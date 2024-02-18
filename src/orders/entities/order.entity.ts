import { Permit } from 'src/permits/entities/permit.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tokenAddress: string;

  @Column()
  shares: string;

  @Column()
  price: string;

  @OneToOne(() => Permit)
  @JoinColumn()
  permit: Permit;

  @OneToOne(() => User)
  @JoinColumn()
  owner: User;
}

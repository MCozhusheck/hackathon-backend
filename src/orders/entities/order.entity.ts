import { Permit } from 'src/permits/entities/permit.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

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
}

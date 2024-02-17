import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Permit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  owner: string;

  @Column()
  spender: string;

  @Column()
  value: number;

  @Column()
  nonce: number;

  @Column()
  deadline: number;

  @Column()
  signature: string;
}

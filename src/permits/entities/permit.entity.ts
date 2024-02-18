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
  deadline: number;

  @Column()
  r: string;

  @Column()
  s: string;

  @Column()
  v: number;

  @Column()
  nonce?: number;
}

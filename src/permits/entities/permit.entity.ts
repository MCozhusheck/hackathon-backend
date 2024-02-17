import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class Permit {
  @ObjectIdColumn()
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
}

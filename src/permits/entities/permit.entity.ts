import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class Permit {
  @ObjectIdColumn()
  _id: number;

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

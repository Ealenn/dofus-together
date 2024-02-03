import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Claim {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quest: string;

  @Column()
  pseudo: string;

  @Column()
  createdAt: Date;
}

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Job {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  companyName: string;

  @Column()
  position: string;

  @Column()
  location: string;

  @Column()
  salary: number;
}
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Application {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  jobId: number;

  @Column({ default: 'Applied' })
  status: string;

  @Column({ nullable: true })
  notes: string;
}
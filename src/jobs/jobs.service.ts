import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from './job.entity';

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(Job)
    private jobRepo: Repository<Job>,
  ) {}

  async create(data: any) {

    const job = this.jobRepo.create(data);

    const savedJob = await this.jobRepo.save(job);

    return {
      message: "Job created successfully",
      job: savedJob
    };
  }

  async findAll() {
    return this.jobRepo.find();
  }

  async findOne(id: number) {
    return this.jobRepo.findOne({ where: { id } });
  }

  async remove(id: number) {
    return this.jobRepo.delete(id);
  }
}
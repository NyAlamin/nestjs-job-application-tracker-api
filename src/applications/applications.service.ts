import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Application } from './application.entity';

@Injectable()
export class ApplicationsService {
  constructor(
    @InjectRepository(Application)
    private appRepo: Repository<Application>,
  ) {}

  async create(application: Partial<Application>) {
    const applications = this.appRepo.create(application);
    const savedApplications =await this.appRepo.save(applications);
    return {
      message: 'Application created successfully',
      application: savedApplications
    };

  }

  findAll() {
    return this.appRepo.find();
  }

  findOne(id: number) {
    return this.appRepo.findOne({ where: { id } });
  }

  async updateStatus(id: number, status: string) {
    await this.appRepo.update(id, { status });
    return this.findOne(id);
  }

  async remove(id: number) {
    const result = await this.appRepo.delete(id);
    if (result.affected === 0) {
      return { message: 'Application not found' };
    }
    return { message: 'Application deleted successfully' };
  }
}
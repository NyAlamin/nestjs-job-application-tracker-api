import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { CreateJobDto } from '../dto/create-job.dto';

@Controller('jobs')
export class JobsController {

  constructor(private jobsService: JobsService) {}

  @Post('create')
  create(@Body() body: CreateJobDto) {
    return this.jobsService.create(body);
  }

  @Get('all')
  findAllJobs() {
    return this.jobsService.findAll();
  }

  @Get(':id')
  findJobById(@Param('id') id: number) {
    return this.jobsService.findOne(id);
  }

  @Delete(':id')
  removeJob(@Param('id') id: number) {
    return this.jobsService.remove(id);
  }

}
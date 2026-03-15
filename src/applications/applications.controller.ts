import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { CreateApplicationDto } from '../dto/create-application.dto';

@Controller('applications')
export class ApplicationsController {

  constructor(private applicationsService: ApplicationsService) {}

  @Post('create')
  create(@Body() body: CreateApplicationDto) {
    return this.applicationsService.create(body);
  }

  @Get('all')
  findAll() {
    return this.applicationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.applicationsService.findOne(id);
  }

  @Patch(':id/status')
  updateStatus(@Param('id') id: number, @Body('status') status: string) {
    return this.applicationsService.updateStatus(id, status);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.applicationsService.remove(id);
  }

}
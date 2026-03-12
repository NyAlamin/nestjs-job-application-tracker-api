import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateJobDto {
  @IsNotEmpty()
  companyName: string;

  @IsNotEmpty()
  position: string;

  @IsNotEmpty()
  location: string;

  @IsNumber()
  salary: number;
}
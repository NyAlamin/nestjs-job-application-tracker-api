import { IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateApplicationDto {

  @IsNumber({}, { message: 'User ID must be a number' })
  userId: number;

  @IsNumber({}, { message: 'Job ID must be a number' })
  jobId: number;

  @IsOptional()
  @IsString({ message: 'Status must be a string' })
  @MaxLength(50, { message: 'Status must be less than 50 characters' })
  status?: string;

  @IsOptional()
  @IsString({ message: 'Notes must be a string' })
  @MaxLength(255, { message: 'Notes must be less than 255 characters' })
  notes?: string;

}

import { IsNotEmpty, IsNumber, Min, MaxLength } from 'class-validator';

export class CreateJobDto {

  @IsNotEmpty({ message: 'Company name is required' })
  @MaxLength(100)
  companyName: string;

  @IsNotEmpty({ message: 'Position is required' })
  @MaxLength(100)
  position: string;

  @IsNotEmpty({ message: 'Location is required' })
  location: string;

  @IsNumber()
  @Min(0, { message: 'Salary must be positive' })
  salary: number;

}
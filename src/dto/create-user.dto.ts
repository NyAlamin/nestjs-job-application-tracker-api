import { IsNotEmpty, IsEmail, MinLength, MaxLength, Matches } from 'class-validator';

export class CreateUserDto {

  @IsNotEmpty({ message: 'Name is required' })
  @MaxLength(100, { message: 'Name must be less than 100 characters' })
  @Matches(/^[A-Za-z\s]+$/, {
    message: 'Name must contain only letters',
  })
  name: string;

  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Invalid email format' })
  email: string;

  @IsNotEmpty({ message: 'Password is required' })
  @MinLength(6, { message: 'Password must be at least 6 characters' })
  password: string;

}
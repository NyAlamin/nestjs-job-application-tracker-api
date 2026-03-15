import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {

  constructor(private usersService: UsersService) {}

  // Register new user
  async register(data: any) {

    const user = await this.usersService.create(data);

    return {
      message: 'User registered successfully',
      user: user
    };
  }

  // Login user
  async login(data: any) {

    const user = await this.usersService.findByEmail(data.email);

    if (!user) {
      throw new UnauthorizedException('Email not found');
    }

    if (user.password !== data.password) {
      throw new UnauthorizedException('Invalid password');
    }

    return {
      message: 'Login successful',
      user: user
    };
  }

}
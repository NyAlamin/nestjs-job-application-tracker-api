import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './user.entity';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  // Create new user
  async create(data: any) {

  const existingUser = await this.userRepository.findOne({
    where: { email: data.email }
  });

  if (existingUser) {
    throw new BadRequestException('This mail already registered!');
  }

  const user = this.userRepository.create(data);
  return this.userRepository.save(user);
}

  // Find user by email
  async findByEmail(email: string) {
    return this.userRepository.findOne({
      where: { email: email },
    });
  }

  // Get all users (optional)
  async findAll() {
    return this.userRepository.find();
  }

  async findOne(id: number) {
  return this.userRepository.findOne({
    where: { id: id },
  });
}

async remove(id: number) {

  const user = await this.userRepository.findOne({
    where: { id }
  });

  if (!user) {
    throw new NotFoundException("User not found");
  }

  await this.userRepository.delete(id);

  return {
    message: "User deleted successfully",
    deletedId: id
  };
}

}
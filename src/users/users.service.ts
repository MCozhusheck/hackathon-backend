import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { Role } from 'src/roles/role.enum';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: MongoRepository<User>,
  ) {}

  async create(input: CreateUserDto): Promise<User> {
    return await this.userRepository.save({ ...input, role: Role.User });
  }

  async findOne(id: string): Promise<User> {
    return await this.userRepository.findOne({ where: { id: id } });
  }
}

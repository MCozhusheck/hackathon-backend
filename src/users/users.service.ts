import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { Role } from 'src/roles/role.enum';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {
    const admin = new User();
    admin.name = 'admin';
    admin.password = 'test';
    admin.role = Role.Admin;
    this.userRepository.save(admin);

    const user = new User();
    user.name = 'user';
    user.password = 'test';
    user.role = Role.User;
    this.userRepository.save(user);
  }

  async create(input: CreateUserDto): Promise<User> {
    return await this.userRepository.save({ ...input, role: Role.User });
  }

  async findOneById(id: number): Promise<User> {
    return await this.userRepository.findOne({ where: { id } });
  }

  async findOneByName(userName: string): Promise<User> {
    return await this.userRepository.findOne({ where: { name: userName } });
  }

  async updatePrivateKey(id: number, privateKey: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });
    user.privateKey = privateKey;
    return await this.userRepository.save(user);
  }
}

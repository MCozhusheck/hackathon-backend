import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { Role } from 'src/roles/role.enum';
import { Repository } from 'typeorm';
import { ethers } from 'ethers';

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
    admin.privateKey =
      'd8aa9de7f258441a8cdbcc42aa27fb494a51ace030c5844cd6e9d980c2c8c34b';
    this.userRepository.save(admin);

    const user = new User();
    user.name = 'user';
    user.password = 'test';
    user.role = Role.User;
    user.privateKey =
      'f6e1f887110a6fd6b2248b5abf209d5180f0c810b756393f20ba62d09598624b';
    this.userRepository.save(user);
  }

  async create(input: CreateUserDto): Promise<User> {
    const wallet = ethers.Wallet.createRandom();
    return await this.userRepository.save({
      ...input,
      role: Role.User,
      privateKey: wallet.privateKey,
    });
  }

  async findOneById(id: number): Promise<User> {
    return await this.userRepository.findOne({ where: { id } });
  }

  async findOneByName(userName: string): Promise<User> {
    return await this.userRepository.findOne({ where: { name: userName } });
  }
}

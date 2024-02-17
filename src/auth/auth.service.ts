import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    username: string,
    pass: string,
  ): Promise<{ access_token: string; userId: string }> {
    const user = await this.usersService.findOneByName(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, username: user.name };
    return {
      access_token: await this.jwtService.signAsync(payload),
      userId: user.id,
    };
  }

  async register(username: string, pass: string) {
    return await this.usersService.create({ name: username, password: pass });
  }

  async getProfile(userName: string): Promise<User> {
    const user = await this.usersService.findOneByName(userName);
    return user;
  }
}

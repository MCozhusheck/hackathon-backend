import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import { Role } from 'src/roles/role.enum';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    username: string,
    pass: string,
  ): Promise<{ access_token: string; userId: number; userRole: Role }> {
    const user = await this.usersService.findOneByName(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, username: user.name };
    return {
      access_token: await this.jwtService.signAsync(payload),
      userId: user.id,
      userRole: user.role,
    };
  }

  async register(username: string, pass: string) {
    return await this.usersService.create({ name: username, password: pass });
  }

  async getProfile(userId: number): Promise<User> {
    const user = await this.usersService.findOneById(userId);
    return user;
  }
}

import { ConflictException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { RegisterRequestDto } from './dto/register.dto';
import { UserEntity } from '../user/entities';
import { InjectRepository } from '@nestjs/typeorm';
import { hash } from 'argon2';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private readonly JWT_SECRET: string;
  private readonly JWT_ACCESS_TOKEN_TTL: string;
  private readonly JWT_REFRESH_TOKEN_TTL: string;

  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {
    this.JWT_SECRET = configService.getOrThrow<string>('JWT_SECRET');
    this.JWT_ACCESS_TOKEN_TTL = configService.getOrThrow<string>(
      'JWT_ACCESS_TOKEN_TTL',
    );
    this.JWT_REFRESH_TOKEN_TTL = configService.getOrThrow<string>(
      'JWT_REFRESH_TOKEN_TTL',
    );
  }

  async register(data: RegisterRequestDto) {
    const { email, phone, firstName, lastName, password } = data;

    const existUser = await this.userRepository.exists({ where: { email } });

    if (existUser) {
      throw new ConflictException(
        'Пользователь с такой почтой уже существует!',
      );
    }

    const user = this.userRepository.create({
      email,
      phone,
      firstName,
      lastName,
      password: await hash(password),
    });

    await this.userRepository.save(user);

    return user;
  }
}

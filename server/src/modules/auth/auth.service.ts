import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { UserEntity } from '@/modules/user/entities';
import { LoginRequestDto, RegisterRequestDto } from './dto';
import { hash, verify } from 'argon2';
import { JwtPayload } from './types';
import ms, { StringValue } from 'ms';
import { Response } from 'express';
import { isDev } from '@/utils';

@Injectable()
export class AuthService {
  private readonly JWT_ACCESS_TOKEN_TTL: StringValue;
  private readonly JWT_REFRESH_TOKEN_TTL: StringValue;
  private readonly COOKIE_DOMAIN: string;

  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {
    this.JWT_ACCESS_TOKEN_TTL = configService.getOrThrow<StringValue>(
      'JWT_ACCESS_TOKEN_TTL',
    );

    this.JWT_REFRESH_TOKEN_TTL = configService.getOrThrow<StringValue>(
      'JWT_REFRESH_TOKEN_TTL',
    );

    this.COOKIE_DOMAIN = configService.getOrThrow<string>('COOKIE_DOMAIN');
  }

  async register(res: Response, data: RegisterRequestDto) {
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

    return this.auth(res, user.id);
  }

  async login(res: Response, data: LoginRequestDto) {
    const { email, password } = data;

    const user = await this.userRepository.findOne({
      where: { email },
      select: { id: true, password: true },
    });

    if (!user) {
      throw new NotFoundException('Пользователь не найден!');
    }

    const isValidPassword = await verify(user.password, password);

    if (!isValidPassword) {
      throw new NotFoundException('Пользователь не найден!');
    }

    return this.auth(res, user.id);
  }

  private auth(res: Response, id: string) {
    const { accessToken, refreshToken } = this.generateTokens(id);

    this.setCookie(res, refreshToken, new Date(ms(this.JWT_REFRESH_TOKEN_TTL)));

    return { accessToken };
  }

  private generateTokens(id: string) {
    const payload: JwtPayload = { id };

    const accessToken = this.jwtService.sign(payload, {
      expiresIn: this.JWT_ACCESS_TOKEN_TTL,
    });

    const refreshToken = this.jwtService.sign(payload, {
      expiresIn: this.JWT_REFRESH_TOKEN_TTL,
    });

    return { accessToken, refreshToken };
  }

  private setCookie(res: Response, value: string, expires: Date) {
    const isDevMode = isDev(this.configService);

    res.cookie('refreshToken', value, {
      httpOnly: true,
      domain: this.COOKIE_DOMAIN,
      expires,
      secure: !isDevMode,
      sameSite: isDevMode ? 'none' : 'lax',
    });
  }
}

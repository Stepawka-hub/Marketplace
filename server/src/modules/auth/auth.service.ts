import { ConflictException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { RegisterRequestDto } from './dto/register.dto';
import { UserEntity } from '../user/entities';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async register(data: RegisterRequestDto) {
    const { email, phone, firstName, lastName } = data;

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
    });

    await this.userRepository.save(user);

    return user;
  }
}

import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Res,
} from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginRequestDto, RegisterRequestDto } from './dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({
    summary: 'Регистрация',
    description:
      'Регистрирует пользователя и возвращает access и refresh токены',
  })
  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  register(
    @Res({ passthrough: true }) res: Response,
    @Body() data: RegisterRequestDto,
  ) {
    return this.authService.register(res, data);
  }

  @ApiOperation({
    summary: 'Авторизация',
    description:
      'Авторизует пользователя  и возвращает access и refresh токены',
  })
  @Post('login')
  @HttpCode(HttpStatus.OK)
  login(
    @Res({ passthrough: true }) res: Response,
    @Body() data: LoginRequestDto,
  ) {
    return this.authService.login(res, data);
  }
}

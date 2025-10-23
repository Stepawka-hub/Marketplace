import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginRequestDto, RegisterRequestDto } from './dto';
import { Request, Response } from 'express';

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
  async register(
    @Res({ passthrough: true }) res: Response,
    @Body() data: RegisterRequestDto,
  ) {
    return await this.authService.register(res, data);
  }

  @ApiOperation({
    summary: 'Авторизация',
    description: 'Авторизует пользователя и возвращает access и refresh токены',
  })
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(
    @Res({ passthrough: true }) res: Response,
    @Body() data: LoginRequestDto,
  ) {
    return await this.authService.login(res, data);
  }

  @ApiOperation({
    summary: 'Обновление токенов',
    description: 'Обновляет и возвращает access и refresh токены',
  })
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  async refresh(
    @Res({ passthrough: true }) res: Response,
    @Req() req: Request,
  ) {
    return await this.authService.refresh(res, req);
  }

  @ApiOperation({
    summary: 'Выход пользователя из системы',
    description: 'Удаляет refresh-токен',
  })
  @Post('logout')
  @HttpCode(HttpStatus.OK)
  logout(@Res({ passthrough: true }) res: Response) {
    return this.authService.logout(res);
  }
}

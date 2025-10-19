import { Body, Controller, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { UserEntity } from '@/modules/user/entities';
import { AuthService } from './auth.service';
import { RegisterRequestDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({
    summary: 'Зарегистрировать пользователя',
    description: 'Регистрирует пользователя и возвращает его',
  })
  @ApiOkResponse({ description: 'Пользователь создан', type: UserEntity })
  @Post('register')
  register(@Body() dto: RegisterRequestDto): Promise<UserEntity> {
    return this.authService.register(dto);
  }
}

import { Body, Controller, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { RegisterRequestDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({
    summary: 'Зарегистрировать пользователя',
    description: 'Регистрирует пользователя и возвращает его',
  })
  @ApiOkResponse({ description: 'Пользователь создан' })
  @Post('register')
  register(@Body() dto: RegisterRequestDto) {
    return this.authService.register(dto);
  }
}

import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { UserService } from './user.service';
import { UserEntity } from './entities';
import { Authorization, Authorizated } from '@/modules/auth/decorators';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({
    summary: 'Получение данных пользователя',
    description:
      'Проверяет авторизован ли пользователь и возвращает его данные',
  })
  @ApiOkResponse({ type: UserEntity })
  @ApiNotFoundResponse({ description: 'Пользователь не найден' })
  @Authorization()
  @Get('@me')
  @HttpCode(HttpStatus.OK)
  me(@Authorizated() user: UserEntity) {
    return user;
  }
}

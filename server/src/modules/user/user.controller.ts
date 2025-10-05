import { Body, Controller, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { UserEntity } from './entities';

@ApiTags('User')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({
    summary: 'Получить пользователя по Id',
    description: 'Возвращает пользователя по Id',
  })
  @ApiOkResponse({ description: 'Пользователь найден', type: UserEntity })
  @ApiNotFoundResponse({
    description: 'Пользователь не найден',
    example: {
      status: HttpStatus.NOT_FOUND,
      message: 'User not found',
      timestamp: '2025-02-18',
      path: '/users/123',
    },
  })
  @Get(':id')
  findById(@Param(':id') id: string) {
    return this.userService.findById(id);
  }

  @ApiOperation({
    summary: 'Создать пользователя',
    description: 'Создаёт пользователя и возвращает его',
  })
  @ApiOkResponse({ description: 'Пользователь создан', type: UserEntity })
  @Post()
  create(@Body() dto: CreateUserDto): Promise<UserEntity> {
    return this.userService.create(dto);
  }
}

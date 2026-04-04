import {
  Body,
  Controller,
  FileTypeValidator,
  Get,
  HttpCode,
  HttpStatus,
  MaxFileSizeValidator,
  ParseFilePipe,
  Patch,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiBody,
  ApiConflictResponse,
  ApiConsumes,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { UserService } from './user.service';
import { UserEntity } from './entities';
import { Authorization, Authorizated } from '@/modules/auth/decorators';
import { UpdateUserDto } from './dto';
import { TUserDataResponse } from './types';

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
  @Get('profile')
  @HttpCode(HttpStatus.OK)
  me(@Authorizated() user: UserEntity) {
    return this.userService.getCurrentUser(user.id);
  }

  @ApiOperation({
    summary: 'Обновление данных пользователя',
    description:
      'Частичное обновление данных текущего авторизованного пользователя',
  })
  @ApiOkResponse({
    description: 'Данные пользователя успешно обновлены',
    type: UserEntity,
  })
  @ApiNotFoundResponse({ description: 'Пользователь не найден' })
  @ApiConflictResponse({ description: 'Email или телефон уже занят' })
  @Authorization()
  @Patch('profile')
  @HttpCode(HttpStatus.OK)
  updateProfile(
    @Authorizated() user: UserEntity,
    @Body() updateData: UpdateUserDto,
  ): Promise<TUserDataResponse> {
    return this.userService.updateUser(user.id, updateData);
  }

  @ApiOperation({ summary: 'Обновление аватара пользователя' })
  @ApiConsumes('multipart/form-data')
  @ApiNotFoundResponse({ description: 'Пользователь не найден' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        avatar: {
          type: 'string',
          format: 'binary',
          description: 'Файл изображения (jpg, png, webp)',
        },
      },
    },
  })
  @Authorization()
  @Patch('profile-avatar')
  @UseInterceptors(FileInterceptor('avatar'))
  updateAvatar(
    @Authorizated() user: UserEntity,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 5 * 1024 * 1024 }),
          new FileTypeValidator({ fileType: /(jpg|jpeg|png|webp)$/ }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    return this.userService.uploadAvatar(user.id, file);
  }
}

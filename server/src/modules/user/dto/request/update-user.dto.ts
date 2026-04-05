import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, Length, Matches } from 'class-validator';

export class UpdateUserDto {
  @ApiPropertyOptional({ example: 'Иван', description: 'Имя пользователя' })
  @IsOptional()
  @IsString()
  @Length(2, 50)
  firstName?: string;

  @ApiPropertyOptional({
    example: 'Иванов',
    description: 'Фамилия пользователя',
  })
  @IsOptional()
  @IsString()
  @Length(2, 50)
  lastName?: string;

  @ApiPropertyOptional({
    example: '+79991234567',
    description: 'Телефон пользователя',
  })
  @IsOptional()
  @IsString()
  @Matches(/^\+?[1-9]\d{1,14}$/, { message: 'Неверный формат телефона' })
  phone?: string;

  @ApiPropertyOptional({
    example: 'avatar.jpg',
    description: 'Аватар пользователя',
  })
  @IsOptional()
  @IsString()
  avatar?: string;

  @ApiPropertyOptional({
    example: 'testPass123',
    description: 'Новый пароль пользователя',
  })
  @IsOptional()
  @IsString()
  @Length(8, 100)
  password?: string;
}

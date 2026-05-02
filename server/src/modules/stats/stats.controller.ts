import { Controller, Get, Query } from '@nestjs/common';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiOkResponse,
  ApiQuery,
} from '@nestjs/swagger';
import { Auth } from '../auth/decorators';
import { StatsService } from './stats.service';
import { USER_ROLES } from '../user/constants';

@ApiTags('Admin Stats')
@ApiBearerAuth()
@Controller('admin/stats')
export class StatsController {
  constructor(private readonly statsService: StatsService) {}

  @Get('summary')
  @Auth(USER_ROLES.ADMIN, USER_ROLES.MODERATOR)
  @ApiOperation({
    summary: 'Получить сводную статистику (карточки)',
  })
  @ApiOkResponse({
    description: 'Сводная статистика получена',
  })
  async getSummary() {
    return this.statsService.getSummary();
  }

  @Get('registrations')
  @Auth(USER_ROLES.ADMIN, USER_ROLES.MODERATOR)
  @ApiOperation({
    summary: 'Получить статистику регистраций по дням',
  })
  @ApiQuery({
    name: 'days',
    required: false,
    type: Number,
    example: 7,
  })
  async getRegistrations(@Query('days') days?: number) {
    return this.statsService.getRegistrations(days);
  }

  @Get('lots-distribution')
  @Auth(USER_ROLES.ADMIN, USER_ROLES.MODERATOR)
  @ApiOperation({
    summary: 'Получить распределение лотов по статусам',
  })
  async getLotsDistribution() {
    return this.statsService.getLotsDistribution();
  }
}

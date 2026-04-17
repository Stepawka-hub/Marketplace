import { Controller, Get, Post, Param, Body, Query } from '@nestjs/common';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiQuery,
} from '@nestjs/swagger';

import { Authorizated, Authorization } from '@/modules/auth/decorators';
import { LotService } from './lot.service';
import { PaginationDto } from '@/common';
import {
  CreateLotDto,
  LotPaginatedResponseDto,
  LotDetailsResponseDto,
  LotActionResponseDto,
  ActiveBidsCountResponseDto,
  BidLotItemsResponseDto,
} from './dto';
import { LOT_API_PROPERTIES, LOT_STATUSES } from './constants';

@ApiTags('Lots')
@Controller('lots')
export class LotController {
  constructor(private readonly lotService: LotService) {}

  @ApiOperation({ summary: 'Получить список лотов' })
  @ApiOkResponse({ type: LotPaginatedResponseDto })
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    example: 1,
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    example: 10,
  })
  @ApiQuery({
    name: 'status',
    required: false,
    enum: [LOT_STATUSES.ACTIVE, LOT_STATUSES.COMPLETED, LOT_STATUSES.EXPIRED],
    description: LOT_API_PROPERTIES.STATUS.description,
  })
  @ApiQuery({
    name: 'category',
    required: false,
    type: String,
  })
  @Get()
  getLots(@Query() paginationDto: PaginationDto) {
    return this.lotService.getLots(paginationDto);
  }

  @ApiOperation({
    summary: 'Получить мои лоты (как продавец)',
  })
  @ApiOkResponse({
    type: LotPaginatedResponseDto,
  })
  @ApiBearerAuth()
  @Authorization()
  @Get('me')
  getMyLots(
    @Authorizated('id') userId: string,
    @Query() paginationDto: PaginationDto,
  ) {
    return this.lotService.getMyLots(userId, paginationDto);
  }

  @ApiOperation({
    summary: 'Мои активные лоты (где участвую и аукцион идёт)',
  })
  @ApiOkResponse({
    type: BidLotItemsResponseDto,
  })
  @ApiBearerAuth()
  @Authorization()
  @Get('me/bids/active')
  getMyActiveLots(
    @Authorizated('id') userId: string,
    @Query() paginationDto: PaginationDto,
  ) {
    return this.lotService.getMyActiveLots(userId, paginationDto);
  }

  @ApiOperation({
    summary: 'Количество активных лотов (для бейджа)',
  })
  @ApiOkResponse({
    type: ActiveBidsCountResponseDto,
  })
  @ApiBearerAuth()
  @Authorization()
  @Get('me/bids/active/count')
  getMyActiveLotsCount(@Authorizated('id') userId: string) {
    return this.lotService.getMyActiveLotsCount(userId);
  }

  @ApiOperation({
    summary: 'История ставок (все лоты, где участвовал)',
  })
  @ApiOkResponse({
    type: BidLotItemsResponseDto,
  })
  @ApiBearerAuth()
  @Authorization()
  @Get('me/bids/history')
  getMyBidsHistory(
    @Authorizated('id') userId: string,
    @Query() paginationDto: PaginationDto,
  ) {
    return this.lotService.getMyBidsHistory(userId, paginationDto);
  }

  @ApiOperation({
    summary: 'Получить лот по ID',
  })
  @ApiOkResponse({
    type: LotDetailsResponseDto,
  })
  @ApiNotFoundResponse({
    description: 'Лот не найден',
  })
  @Get(':id')
  getLotById(@Param('id') id: string) {
    return this.lotService.getLotById(id);
  }

  @ApiOperation({
    summary: 'Создать лот',
  })
  @ApiCreatedResponse({
    type: LotActionResponseDto,
  })
  @ApiBearerAuth()
  @Authorization()
  @Post()
  createLot(@Authorizated('id') userId: string, @Body() dto: CreateLotDto) {
    return this.lotService.createLot(userId, dto);
  }
}

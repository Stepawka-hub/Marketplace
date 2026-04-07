import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  Query,
} from '@nestjs/common';
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
  UpdateLotDto,
  LotPaginatedResponseDto,
  LotDetailsResponseDto,
  LotActionResponseDto,
  ActiveBidLotsResponseDto,
  ActiveBidsCountResponseDto,
  BidHistoryLotsResponseDto,
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
  getLots(
    @Query() paginationDto: PaginationDto,
    @Query('status') status?: string,
    @Query('category') category?: string,
  ) {
    return this.lotService.getLots(paginationDto, status, category);
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
    summary: 'Получить мои лоты (как продавец)',
  })
  @ApiOkResponse({
    type: LotPaginatedResponseDto,
  })
  @ApiBearerAuth()
  @Authorization()
  @Get('my/list')
  getMyLots(
    @Authorizated('id') userId: string,
    @Query() paginationDto: PaginationDto,
  ) {
    return this.lotService.getMyLots(userId, paginationDto);
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

  @ApiOperation({
    summary: 'Обновить лот',
  })
  @ApiOkResponse({
    type: LotActionResponseDto,
  })
  @ApiBearerAuth()
  @Authorization()
  @Patch(':id')
  updateLot(
    @Authorizated('id') userId: string,
    @Param('id') lotId: string,
    @Body() dto: UpdateLotDto,
  ) {
    return this.lotService.updateLot(userId, lotId, dto);
  }

  @ApiOperation({
    summary: 'Удалить лот (черновик)',
  })
  @ApiOkResponse({
    type: LotActionResponseDto,
  })
  @ApiBearerAuth()
  @Authorization()
  @Delete(':id')
  deleteLot(@Authorizated('id') userId: string, @Param('id') lotId: string) {
    return this.lotService.deleteLot(userId, lotId);
  }

  @ApiOperation({
    summary: 'Мои активные лоты (где участвую и аукцион идёт)',
  })
  @ApiOkResponse({
    type: ActiveBidLotsResponseDto,
  })
  @ApiBearerAuth()
  @Authorization()
  @Get('my/active')
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
  @Get('my/active/count')
  getMyActiveLotsCount(@Authorizated('id') userId: string) {
    return this.lotService.getMyActiveLotsCount(userId);
  }

  @ApiOperation({
    summary: 'История ставок (все лоты, где участвовал)',
  })
  @ApiOkResponse({
    type: BidHistoryLotsResponseDto,
  })
  @ApiBearerAuth()
  @Authorization()
  @Get('my/history')
  getMyBidsHistory(
    @Authorizated('id') userId: string,
    @Query() paginationDto: PaginationDto,
  ) {
    return this.lotService.getMyBidsHistory(userId, paginationDto);
  }
}

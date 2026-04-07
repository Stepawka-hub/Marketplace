import { Controller, Get, Post, Param, Body, Query } from '@nestjs/common';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiQuery,
  ApiParam,
} from '@nestjs/swagger';

import { Authorizated, Authorization } from '@/modules/auth/decorators';
import { BidService } from './bid.service';
import { PaginationDto } from '@/common';
import {
  BidActionResponseDto,
  BidPaginatedResponseDto,
  CreateBidDto,
} from './dto';

@ApiTags('Bids')
@ApiBearerAuth()
@Controller('lots/:lotId/bids')
export class BidController {
  constructor(private readonly bidService: BidService) {}

  @ApiOperation({
    summary: 'Получить ставки лота',
    description: 'Возвращает список всех ставок конкретного лота',
  })
  @ApiOkResponse({
    description: 'Ставки лота успешно получены',
    type: BidPaginatedResponseDto,
  })
  @ApiQuery({ name: 'page', required: false, type: Number, example: 1 })
  @ApiQuery({ name: 'limit', required: false, type: Number, example: 10 })
  @ApiParam({ name: 'lotId', description: 'ID лота' })
  @Authorization()
  @Get()
  getLotBids(
    @Param('lotId') lotId: string,
    @Query() paginationDto: PaginationDto,
  ) {
    return this.bidService.getLotBids(lotId, paginationDto);
  }

  @ApiOperation({
    summary: 'Сделать ставку',
    description: 'Создаёт новую ставку на лот',
  })
  @ApiCreatedResponse({
    description: 'Ставка успешно сделана',
    type: BidActionResponseDto,
  })
  @ApiParam({ name: 'lotId', description: 'ID лота' })
  @Authorization()
  @Post()
  placeBid(
    @Authorizated('id') userId: string,
    @Param('lotId') lotId: string,
    @Body() dto: CreateBidDto,
  ) {
    return this.bidService.placeBid(userId, lotId, dto);
  }
}

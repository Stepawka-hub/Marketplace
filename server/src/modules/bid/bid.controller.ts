import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Query,
  Delete,
} from '@nestjs/common';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiQuery,
  ApiParam,
} from '@nestjs/swagger';

import { Authorizated, Auth } from '@/modules/auth/decorators';
import { BidService } from './bid.service';
import { PaginationDto } from '@/common';
import {
  BidActionResponseDto,
  BidPaginatedResponseDto,
  CreateAutoBidDto,
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
  @ApiParam({
    name: 'lotId',
    description: 'ID лота',
  })
  @Auth()
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
  @ApiParam({
    name: 'lotId',
    description: 'ID лота',
  })
  @Auth()
  @Post()
  placeBid(
    @Authorizated('id') userId: string,
    @Param('lotId') lotId: string,
    @Body() dto: CreateBidDto,
  ) {
    return this.bidService.placeBid(userId, lotId, dto);
  }

  @ApiOperation({
    summary: 'Включить автоставку (только для текущего лидера)',
  })
  @ApiCreatedResponse({
    description: 'Автоставка успешно включена',
  })
  @ApiParam({
    name: 'lotId',
    description: 'ID лота',
  })
  @Auth()
  @Post('auto')
  async enableAutoBid(
    @Authorizated('id') userId: string,
    @Param('lotId') lotId: string,
    @Body() dto: CreateAutoBidDto,
  ) {
    return this.bidService.enableAutoBid(userId, lotId, dto.maxAmount);
  }

  @ApiOperation({
    summary: 'Отключить автоставку',
  })
  @ApiOkResponse({
    description: 'Автоставка успешно отключена',
  })
  @ApiParam({
    name: 'lotId',
    description: 'ID лота',
  })
  @Auth()
  @Delete('auto')
  async deleteAutoBid(
    @Authorizated('id') userId: string,
    @Param('lotId') lotId: string,
  ) {
    return this.bidService.deleteAutoBid(userId, lotId);
  }

  @ApiOperation({
    summary: 'Получить автоставку пользователя',
  })
  @ApiOkResponse({
    description: 'Автоставка успешно получена',
  })
  @ApiParam({
    name: 'lotId',
    description: 'ID лота',
  })
  @Auth()
  @Get('auto')
  async getUserAutoBid(
    @Authorizated('id') userId: string,
    @Param('lotId') lotId: string,
  ) {
    return this.bidService.getUserAutoBid(userId, lotId);
  }
}

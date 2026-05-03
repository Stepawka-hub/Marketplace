import {
  Body,
  Controller,
  Get,
  Post,
  Patch,
  Param,
  HttpCode,
  HttpStatus,
  Query,
} from '@nestjs/common';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiForbiddenResponse,
  ApiQuery,
} from '@nestjs/swagger';
import { SellerRequestsService } from './seller-requests.service';
import { Authorizated, Auth } from '@/modules/auth/decorators';
import { CreateSellerRequestDto, UpdateSellerRequestDto } from './dto/request';
import { USER_ROLES } from '../user/constants';
import { PaginationDto } from '@/common';

@ApiTags('Seller Requests')
@ApiBearerAuth()
@Controller('seller-requests')
export class SellerRequestsController {
  constructor(private readonly sellerRequestsService: SellerRequestsService) {}

  @ApiOperation({
    summary: 'Создать заявку на статус продавца',
  })
  @ApiCreatedResponse({
    description: 'Заявка успешно создана',
  })
  @Auth(USER_ROLES.USER)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(
    @Authorizated('id') userId: string,
    @Body() dto: CreateSellerRequestDto,
  ) {
    return this.sellerRequestsService.create(userId, dto);
  }

  @ApiOperation({
    summary: 'Получить статус последней заявки пользователя',
  })
  @ApiOkResponse({
    description: 'Статус заявки',
  })
  @Auth()
  @Get('my/latest')
  async getLatestRequestStatus(@Authorizated('id') userId: string) {
    return this.sellerRequestsService.getLatestRequestStatus(userId);
  }

  @ApiOperation({
    summary: 'Получить все заявки (доступно модератору, администратору)',
  })
  @ApiOkResponse({
    description: 'Список всех заявок',
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
  @Auth(USER_ROLES.MODERATOR, USER_ROLES.ADMIN)
  @Get()
  getAllRequests(@Query() paginationDto: PaginationDto) {
    return this.sellerRequestsService.getAllRequests(paginationDto);
  }

  @ApiOperation({
    summary: 'Одобрить/отклонить заявку (доступно модератору, администратору)',
  })
  @ApiOkResponse({
    description: 'Статус заявки обновлён',
  })
  @ApiNotFoundResponse({
    description: 'Заявка не найдена',
  })
  @ApiForbiddenResponse({
    description: 'Недостаточно прав',
  })
  @Auth(USER_ROLES.MODERATOR, USER_ROLES.ADMIN)
  @Patch(':id')
  updateRequestStatus(
    @Param('id') id: string,
    @Body() dto: UpdateSellerRequestDto,
  ) {
    return this.sellerRequestsService.updateStatus(id, dto);
  }
}

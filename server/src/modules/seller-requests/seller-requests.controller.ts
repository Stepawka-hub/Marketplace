import {
  Body,
  Controller,
  Get,
  Post,
  Patch,
  Param,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiForbiddenResponse,
} from '@nestjs/swagger';
import { SellerRequestsService } from './seller-requests.service';
import { Authorizated, Auth } from '@/modules/auth/decorators';
import { CreateSellerRequestDto, UpdateSellerRequestDto } from './dto/request';
import { USER_ROLES } from '../user/constants';

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
    summary: 'Получить мои заявки',
  })
  @ApiOkResponse({
    description: 'Список заявок пользователя',
  })
  @Auth()
  @Get('my')
  getMyRequests(@Authorizated('id') userId: string) {
    return this.sellerRequestsService.getUserRequests(userId);
  }

  @ApiOperation({
    summary: 'Получить все заявки (доступно модератору, администратору)',
  })
  @ApiOkResponse({
    description: 'Список всех заявок',
  })
  @Auth(USER_ROLES.MODERATOR, USER_ROLES.ADMIN)
  @Get()
  getAllRequests() {
    return this.sellerRequestsService.getAllRequests();
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

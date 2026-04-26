// seller-requests.controller.ts
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
import { UserEntity } from '@/modules/user/entities';
import { CreateSellerRequestDto, UpdateSellerRequestDto } from './dto/request';
import { USER_ROLES } from '../user/constants';

@ApiTags('Seller Requests')
@ApiBearerAuth()
@Controller('seller-requests')
export class SellerRequestsController {
  constructor(private readonly sellerRequestsService: SellerRequestsService) {}

  @ApiOperation({ summary: 'Создать заявку на статус продавца' })
  @ApiCreatedResponse({ description: 'Заявка успешно создана' })
  @Auth(USER_ROLES.USER)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(
    @Authorizated() user: UserEntity,
    @Body() dto: CreateSellerRequestDto,
  ) {
    return this.sellerRequestsService.create(user.id, dto);
  }

  @ApiOperation({ summary: 'Получить мои заявки' })
  @ApiOkResponse({ description: 'Список заявок пользователя' })
  @Auth()
  @Get('my')
  getMyRequests(@Authorizated() user: UserEntity) {
    return this.sellerRequestsService.getUserRequests(user.id);
  }

  @ApiOperation({ summary: 'Получить все заявки (только админ)' })
  @ApiOkResponse({ description: 'Список всех заявок' })
  @Auth(USER_ROLES.MODERATOR, USER_ROLES.ADMIN)
  @Get()
  getAllRequests() {
    return this.sellerRequestsService.getAllRequests();
  }

  @ApiOperation({ summary: 'Одобрить/отклонить заявку (только админ)' })
  @ApiOkResponse({ description: 'Статус заявки обновлён' })
  @ApiNotFoundResponse({ description: 'Заявка не найдена' })
  @ApiForbiddenResponse({ description: 'Недостаточно прав' })
  @Auth(USER_ROLES.MODERATOR, USER_ROLES.ADMIN)
  @Patch(':id')
  updateRequestStatus(
    @Param('id') id: string,
    @Body() dto: UpdateSellerRequestDto,
  ) {
    return this.sellerRequestsService.updateStatus(id, dto);
  }
}

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
  ApiBody,
  ApiQuery,
} from '@nestjs/swagger';

import { Authorizated, Authorization } from '@/modules/auth/decorators';
import { CartService } from './cart.service';
import { PaginationDto } from '@/common';
import {
  AddToCartDto,
  UpdateCartItemDto,
  CartPaginatedResponseDto,
  CartActionResponseDto,
  CartCountResponseDto,
  CartDeleteResponseDto,
} from './dto';

@ApiTags('cart')
@ApiBearerAuth()
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @ApiOperation({
    summary: 'Получение корзины пользователя',
    description: 'Возвращает список товаров в корзине с общей стоимостью',
  })
  @ApiOkResponse({
    description: 'Корзина успешно получена',
    type: CartPaginatedResponseDto,
  })
  @ApiQuery({ name: 'page', required: false, type: Number, example: 1 })
  @ApiQuery({ name: 'limit', required: false, type: Number, example: 10 })
  @Authorization()
  @Get()
  findAll(
    @Authorizated('id') userId: string,
    @Query() paginationDto: PaginationDto,
  ) {
    return this.cartService.findAll(userId, paginationDto);
  }

  @ApiOperation({
    summary: 'Получение количества уникальных товаров',
    description: 'Возвращает количество уникальных товаров в корзине',
  })
  @ApiOkResponse({
    description: 'Количество товаров в корзине',
    type: CartCountResponseDto,
  })
  @Authorization()
  @Get('count')
  getCount(@Authorizated('id') userId: string) {
    return this.cartService.getCount(userId);
  }

  @ApiOperation({
    summary: 'Добавление товара в корзину',
    description: 'Добавляет товар в корзину или увеличивает его количество',
  })
  @ApiOkResponse({
    description: 'Товар успешно добавлен в корзину',
    type: CartActionResponseDto,
  })
  @ApiBody({ type: AddToCartDto, required: false })
  @Authorization()
  @Post(':productId')
  addToCart(
    @Authorizated('id') userId: string,
    @Param('productId') productId: string,
    @Body() dto: AddToCartDto = {},
  ) {
    return this.cartService.addToCart(userId, productId, dto);
  }

  @ApiOperation({
    summary: 'Обновление количества товара',
    description: 'Изменяет количество конкретного товара в корзине',
  })
  @ApiOkResponse({
    description: 'Количество товара обновлено',
    type: CartActionResponseDto,
  })
  @ApiBody({ type: UpdateCartItemDto })
  @Authorization()
  @Patch(':productId')
  updateCount(
    @Authorizated('id') userId: string,
    @Param('productId') productId: string,
    @Body() dto: UpdateCartItemDto,
  ) {
    return this.cartService.updateCount(userId, productId, dto);
  }

  @ApiOperation({
    summary: 'Удаление товара из корзины',
    description: 'Удаляет конкретный товар из корзины',
  })
  @ApiOkResponse({
    description: 'Товар успешно удален из корзины',
    type: CartDeleteResponseDto,
  })
  @Authorization()
  @Delete(':productId')
  removeFromCart(
    @Authorizated('id') userId: string,
    @Param('productId') productId: string,
  ) {
    return this.cartService.removeFromCart(userId, productId);
  }

  @ApiOperation({
    summary: 'Очистка корзины',
    description: 'Удаляет все товары из корзины пользователя',
  })
  @ApiOkResponse({
    description: 'Корзина успешно очищена',
    type: CartDeleteResponseDto,
  })
  @Authorization()
  @Delete()
  clearCart(@Authorizated('id') userId: string) {
    return this.cartService.clearCart(userId);
  }
}

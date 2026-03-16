// // src/modules/cart/cart.controller.ts
// import {
//   Controller,
//   Get,
//   Post,
//   Patch,
//   Delete,
//   Param,
//   Body,
//   Query,
// } from '@nestjs/common';
// import {
//   ApiTags,
//   ApiBearerAuth,
//   ApiOperation,
//   ApiOkResponse,
//   ApiNotFoundResponse,
//   ApiBody,
//   ApiQuery,
// } from '@nestjs/swagger';

// import { Authorizated, Authorization } from '@/modules/auth/decorators';
// import { CartService } from './cart.service';
// import {
//   AddToCartDto,
//   UpdateCartItemDto,
//   CartItemDto,
//   CartListResponseDto,
//   CartItemResponseDto,
//   CartListApiResponseDto,
//   CartCountResponseDto,
//   CartTotalResponseDto,
// } from './dto';
// import { TApiResponse } from '@/common';

// @ApiTags('cart')
// @ApiBearerAuth()
// @Controller('cart')
// export class CartController {
//   constructor(private readonly cartService: CartService) {}

//   @ApiOperation({
//     summary: 'Получение корзины пользователя',
//     description: 'Возвращает список товаров в корзине с общей стоимостью',
//   })
//   @ApiOkResponse({
//     description: 'Корзина успешно получена',
//     type: CartListApiResponseDto,
//   })
//   @Authorization()
//   @Get()
//   findAll(
//     @Authorizated('id') userId: string,
//   ): Promise<TApiResponse<CartListResponseDto>> {
//     return this.cartService.findAll(userId);
//   }

//   @ApiOperation({
//     summary: 'Добавление товара в корзину',
//     description: 'Добавляет товар в корзину или увеличивает его количество',
//   })
//   @ApiOkResponse({
//     description: 'Товар успешно добавлен в корзину',
//     type: CartItemResponseDto,
//   })
//   @ApiBody({ type: AddToCartDto, required: false })
//   @Authorization()
//   @Post(':productId')
//   addToCart(
//     @Authorizated('id') userId: string,
//     @Param('productId') productId: string,
//     @Body() dto: AddToCartDto = {},
//   ): Promise<TApiResponse<CartItemDto>> {
//     return this.cartService.addToCart(userId, productId, dto);
//   }

//   @ApiOperation({
//     summary: 'Обновление количества товара',
//     description: 'Изменяет количество конкретного товара в корзине',
//   })
//   @ApiOkResponse({
//     description: 'Количество товара обновлено',
//     type: CartItemResponseDto,
//   })
//   @ApiBody({ type: UpdateCartItemDto })
//   @Authorization()
//   @Patch(':productId')
//   updateCount(
//     @Authorizated('id') userId: string,
//     @Param('productId') productId: string,
//     @Body() dto: UpdateCartItemDto,
//   ): Promise<TApiResponse<CartItemDto>> {
//     return this.cartService.updateCount(userId, productId, dto);
//   }

//   @ApiOperation({
//     summary: 'Удаление товара из корзины',
//     description: 'Удаляет конкретный товар из корзины',
//   })
//   @ApiOkResponse({
//     description: 'Товар успешно удален из корзины',
//     schema: {
//       properties: {
//         statusCode: { type: 'number', example: 200 },
//         message: { type: 'string', example: 'Товар успешно удален из корзины' },
//         data: { type: 'null', example: null },
//       },
//     },
//   })
//   @Authorization()
//   @Delete(':productId')
//   removeFromCart(
//     @Authorizated('id') userId: string,
//     @Param('productId') productId: string,
//   ): Promise<TApiResponse<null>> {
//     return this.cartService.removeFromCart(userId, productId);
//   }

//   @ApiOperation({
//     summary: 'Очистка корзины',
//     description: 'Удаляет все товары из корзины пользователя',
//   })
//   @ApiOkResponse({
//     description: 'Корзина успешно очищена',
//     schema: {
//       properties: {
//         statusCode: { type: 'number', example: 200 },
//         message: { type: 'string', example: 'Корзина успешно очищена' },
//         data: { type: 'null', example: null },
//       },
//     },
//   })
//   @Authorization()
//   @Delete()
//   clearCart(
//     @Authorizated('id') userId: string,
//   ): Promise<TApiResponse<null>> {
//     return this.cartService.clearCart(userId);
//   }

//   @ApiOperation({
//     summary: 'Получение количества уникальных товаров',
//     description: 'Возвращает количество уникальных товаров в корзине',
//   })
//   @ApiOkResponse({
//     description: 'Количество товаров в корзине',
//     type: CartCountResponseDto,
//   })
//   @Authorization()
//   @Get('count')
//   getCount(
//     @Authorizated('id') userId: string,
//   ): Promise<TApiResponse<number>> {
//     return this.cartService.getCount(userId);
//   }

//   @ApiOperation({
//     summary: 'Получение общего количества товаров',
//     description: 'Возвращает сумму всех количеств товаров в корзине',
//   })
//   @ApiOkResponse({
//     description: 'Общее количество товаров в корзине',
//     type: CartCountResponseDto,
//   })
//   @Authorization()
//   @Get('total-items')
//   getTotalItems(
//     @Authorizated('id') userId: string,
//   ): Promise<TApiResponse<number>> {
//     return this.cartService.getTotalItems(userId);
//   }

//   @ApiOperation({
//     summary: 'Получение общей стоимости корзины',
//     description: 'Возвращает сумму всех товаров в корзине',
//   })
//   @ApiOkResponse({
//     description: 'Общая стоимость корзины',
//     type: CartTotalResponseDto,
//   })
//   @Authorization()
//   @Get('total-price')
//   getTotalPrice(
//     @Authorizated('id') userId: string,
//   ): Promise<TApiResponse<number>> {
//     return this.cartService.getTotalPrice(userId);
//   }
// }

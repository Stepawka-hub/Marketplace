import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { PaymentService } from './payment.service';
import { Auth, Authorizated } from '@/modules/auth/decorators';
import { CreatePaymentDto } from './dto';

@ApiTags('Payment')
@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @ApiOperation({
    summary: 'Создать платёж для пополнения баланса',
  })
  @ApiBearerAuth()
  @Auth()
  @Post()
  async createPayment(
    @Authorizated('id') userId: string,
    @Body() dto: CreatePaymentDto,
  ) {
    return this.paymentService.createPayment(userId, dto);
  }
}

import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import {
  YookassaService,
  CurrencyEnum,
  CreatePaymentRequest,
  ConfirmationEnum,
} from 'nestjs-yookassa';
import { UserEntity } from '@/modules/user/entities';
import { PaymentEntity } from './entities/payment.entity';
import { CreatePaymentDto } from './dto';
import { ApiResponse } from '@/common';
import { PAYMENT_EVENTS, PAYMENT_STATUSES } from './constants';
import { TYookassaWebhook } from './types';

@Injectable()
export class PaymentService {
  private readonly returnUrl: string;

  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(PaymentEntity)
    private readonly paymentRepository: Repository<PaymentEntity>,
    private readonly yookassaService: YookassaService,
    private readonly configService: ConfigService,
  ) {
    this.returnUrl = this.configService.getOrThrow('YOOKASSA_RETURN_URL');
  }

  async createPayment(userId: string, dto: CreatePaymentDto) {
    const { amount } = dto;

    const paymentData: CreatePaymentRequest = {
      amount: {
        value: amount, // Сумма
        currency: CurrencyEnum.RUB, // Валюта
      },
      description: `Пополнение баланса пользователя ${userId}`, // Описание платежа
      capture: true, // Флаг для отложенного захвата
      confirmation: {
        type: ConfirmationEnum.REDIRECT, // Тип подтверждения
        return_url: this.returnUrl, // URL для редиректа после подтверждения
      },
      metadata: {
        userId,
        paymentType: 'balance_topup',
      },
    };

    try {
      const yookassaPayment =
        await this.yookassaService.payments.create(paymentData);

      const payment = this.paymentRepository.create({
        userId,
        amount,
        yookassaPaymentId: yookassaPayment.id,
        status: yookassaPayment.status,
      });

      await this.paymentRepository.save(payment);

      const confirmation = yookassaPayment.confirmation as {
        confirmation_url: string;
      };
      const confirmationUrl = confirmation.confirmation_url;

      if (!confirmationUrl) {
        throw new BadRequestException('Не удалось получить ссылку на оплату');
      }

      return ApiResponse.success(
        {
          paymentId: yookassaPayment.id,
          confirmationUrl,
        },
        'Платёж создан',
      );
    } catch {
      throw new BadRequestException('Ошибка при создании платежа');
    }
  }

  async handleWebhook(body: TYookassaWebhook) {
    const { event, object } = body;

    if (event === PAYMENT_EVENTS.SUCCEEDED) {
      const paymentId = object.id;
      const amount = parseFloat(object.amount.value);
      const userId = object.metadata.userId;

      const payment = await this.paymentRepository.findOne({
        where: {
          yookassaPaymentId: paymentId,
        },
        relations: ['user'],
      });

      if (!payment || payment.status === PAYMENT_STATUSES.SUCCEEDED) {
        return {
          received: true,
        };
      }

      payment.status = PAYMENT_STATUSES.SUCCEEDED;
      await this.paymentRepository.save(payment);

      const user = payment.user;

      const currentBalance = Number(user.balance) || 0;
      const newBalance = currentBalance + amount;

      await this.userRepository.update(user.id, {
        balance: newBalance,
      });

      console.log(`✅ Balance topped up: user ${userId}, +${amount} RUB`);
    }

    return {
      received: true,
    };
  }
}

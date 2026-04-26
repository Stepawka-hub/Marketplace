import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, IsEnum, Length } from 'class-validator';
import {
  SELLER_REQUEST_STATUSES,
  SELLER_REQUEST_VALIDATION,
} from '../../constants';

export class UpdateSellerRequestDto {
  @ApiProperty({
    enum: [SELLER_REQUEST_STATUSES.APPROVED, SELLER_REQUEST_STATUSES.REJECTED],
    required: true,
  })
  @IsEnum([SELLER_REQUEST_STATUSES.APPROVED, SELLER_REQUEST_STATUSES.REJECTED])
  status: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  @Length(0, SELLER_REQUEST_VALIDATION.REJECTION_REASON.MAX)
  rejectionReason?: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { USER_API_PROPERTIES } from '@/modules/user/constants';

export class ProductSellerDto {
  @ApiProperty(USER_API_PROPERTIES.ID)
  id: string;

  @ApiProperty(USER_API_PROPERTIES.FIRST_NAME)
  firstName: string;

  @ApiProperty(USER_API_PROPERTIES.LAST_NAME)
  lastName: string;

  @ApiProperty(USER_API_PROPERTIES.AVATAR)
  avatar: string;
}

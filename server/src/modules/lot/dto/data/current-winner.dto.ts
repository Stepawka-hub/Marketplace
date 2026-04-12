import { ApiProperty } from '@nestjs/swagger';

export class CurrentWinnerDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty({ nullable: true })
  avatar: string | null;
}

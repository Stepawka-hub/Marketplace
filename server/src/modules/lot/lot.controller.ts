import { Controller } from '@nestjs/common';
import { LotService } from './lot.service';

@Controller('lot')
export class LotController {
  constructor(private readonly lotService: LotService) {}
}

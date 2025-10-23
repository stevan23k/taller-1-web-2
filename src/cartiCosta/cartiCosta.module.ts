import { Module } from '@nestjs/common';
import { CartiCostaController } from './cartiCosta.controller';
import { CartiCostaService } from './cartiCosta.service';

@Module({
  controllers: [CartiCostaController],
  providers: [CartiCostaService],
})
export class CartiCostaModule {}

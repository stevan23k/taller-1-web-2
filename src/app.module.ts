import { Module } from '@nestjs/common';
import { CartiCostaModule } from './cartiCosta/cartiCosta.module';
import { MundialModule } from './mundial/mundial.module';

@Module({
  imports: [CartiCostaModule, MundialModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

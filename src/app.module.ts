import { Module } from '@nestjs/common';
import { CartiCostaModule } from './cartiCosta/cartiCosta.module';
import { MundialModule } from './mundial/mundial.module';
import { AppController } from './app.controller';

@Module({
  imports: [CartiCostaModule, MundialModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { MundialController } from './mundial.controller';
import { MundialService } from './mundial.service';

@Module({
  controllers: [MundialController],
  providers: [MundialService]
})
export class MundialModule {}

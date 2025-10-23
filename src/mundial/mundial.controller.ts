import { Controller, Get, Param } from '@nestjs/common';
import { MundialService } from './mundial.service';

@Controller('mundial')
export class MundialController {
  constructor(private service: MundialService) {}

  @Get('equipos')
  getEquipos() {
    return this.service.getEquipos();
  }

  @Get('equipos/:id')
  getEquipo(@Param('id') id: number) {
    const idNumber = Number(id);
    return this.service.getEquipoId(idNumber);
  }
}

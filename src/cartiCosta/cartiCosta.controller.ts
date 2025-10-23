import { Controller, Get, Param } from '@nestjs/common';
import { CartiCostaService } from './cartiCosta.service';
import { Tipo } from './cartiCosta.model';

@Controller('cartas')
export class CartiCostaController {
  constructor(private service: CartiCostaService) {}

  @Get()
  getCartas() {
    return this.service.getCartas();
  }

  @Get(':tipo')
  getCartasPorTipo(@Param('tipo') tipo: Tipo) {
    return this.service.getCartasByTipo(tipo);
  }
}

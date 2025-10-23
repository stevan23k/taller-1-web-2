import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AppController {
  @Get()
  rutas() {
    return {
      cartas: {
        '/cartas': 'listar todas las cartas',
        '/cartas/tipo': 'listar por tipo de cartas, fuego, agua, tierra, aire',
      },
      mundial: {
        'mundian/equipo': 'listar todos los equipos',
        'mundian/euqipos/:id': 'listar un euqipo en especifico por su id',
        'mundial/jugadores': 'listart todos los jugadores del mundial',
        'mundial/jugadores/:id': 'listar un jugador en especifico por su id',
      },
    };
  }
}

import { Injectable } from '@nestjs/common';
import { equipos, jugadores } from './db';
import { Equipo, Jugador } from './mundial.model';

@Injectable()
export class MundialService {
  getEquipos() {
    return equipos.map((equipo) => {
      const jugadoresEquipo = jugadores.filter((j) =>
        equipo.jugadores.includes(j.id),
      );

      return { ...equipo, jugadores: jugadoresEquipo };
    });
  }

  getEquipoId(id: number) {
    const equipo = equipos.find((e) => e.id === id);

    if (!equipo) {
      return `No existe un equipo con id ${id}`;
    }

    const jugadoresEquipo = jugadores.filter((j) =>
      equipo.jugadores.includes(j.id),
    );

    return { ...equipo, jugadores: jugadoresEquipo };
  }
}

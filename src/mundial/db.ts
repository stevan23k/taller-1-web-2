import { Jugador, Equipo } from './mundial.model';

export const equipos: Equipo[] = [
  {
    id: 1,
    pais: 'argentina',
    confederacion: 'conmebol',
    n_campeon: 2,
    escudo: 'url_escudo_argentina',
    jugadores: [1],
  },
  {
    id: 2,
    pais: 'brasil',
    confederacion: 'chipacori',
    n_campeon: 5,
    escudo: 'url_escudo_brasil',
    jugadores: [2],
  },
];

export const jugadores: Jugador[] = [
  {
    id: 1,
    nombre: 'Lionel Messi',
    edad: 36,
    equipo: 1,
    url_imagen: 'url_imagen_messi',
    dribling: 95,
    velocidad: 86,
    regate: 88,
  },

  {
    id: 2,
    nombre: 'Neymar Jr',
    edad: 29,
    equipo: 2,
    url_imagen: 'url_imagen_neymar',
    dribling: 92,
    velocidad: 91,
    regate: 89,
  },
];

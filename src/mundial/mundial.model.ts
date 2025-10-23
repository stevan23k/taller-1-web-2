export interface Equipo {
  id: number;
  pais: string;
  confederacion: string;
  n_campeon: number;
  escudo: string;
  jugadores: number[];
}

export interface Jugador {
  id: number;
  nombre: string;
  edad: number;
  equipo: number;
  url_imagen: string;
  dribling: number;
  velocidad: number;
  regate: number;
}

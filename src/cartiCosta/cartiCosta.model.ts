export enum Tipo {
  aire = 'aire',
  agua = 'agua',
  fuego = 'fuego',
  tierra = 'tierra',
}

export interface Carta {
  id: number;
  nombre: string;
  tipo: Tipo;
  nivel_poder: number;
  ciudad_origen: string;
  img: string;
}

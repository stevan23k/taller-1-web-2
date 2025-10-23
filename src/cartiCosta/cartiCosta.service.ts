import { Injectable } from '@nestjs/common';
import { Carta, Tipo } from './cartiCosta.model';

@Injectable()
export class CartiCostaService {
  cartas: Carta[] = [
    {
      id: 1,
      nombre: 'chico gel',
      tipo: Tipo.aire,
      nivel_poder: 3000,
      ciudad_origen: 'mereketengue',
      img: 'https://i.ytimg.com/vi/h-GDopD9OAM/mqdefault.jpg',
    },
    {
      id: 2,
      nombre: 'el diente',
      tipo: Tipo.fuego,
      nivel_poder: 1500,
      ciudad_origen: 'barrancabermeja',
      img: 'https://www.google.com/imgres?q=el%20diente%20imagen%20coste%C3%B1o&imgurl=https%3A%2F%2Fstatics.uniradioinforma.com%2F2025%2F04%2Fcrop%2F68126d8de1972__450x550.webp&imgrefurl=https%3A%2F%2Fwww.uniradioinforma.com%2Ffama%2Fel-costeno-revela-su-ex-prometida-le-robo-250-mil-pesos-n817131&docid=VknktZS6JUUCAM&tbnid=oMzD74O-JGLF_M&vet=12ahUKEwjxw9rO6LaQAxVISDABHafpFdQQM3oECBoQAA..i&w=450&h=550&hcb=2&ved=2ahUKEwjxw9rO6LaQAxVISDABHafpFdQQM3oECBoQAA',
    },
    {
      id: 3,
      nombre: 'orlanduco',
      tipo: Tipo.agua,
      nivel_poder: 2000,
      ciudad_origen: 'cartagena',
      img: 'https://instagram.fbaq5-1.fna.fbcdn.net/v/t51.2885-19/461991333_1214247509810313_8097028101926429341_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fbaq5-1.fna.fbcdn.net&_nc_cat=1&_nc_oc=Q6cZ2QFciFP4CuOJAG4g8YXR3HkfNVGFshzk_OVl725q7-i9dKa6JWZUQvc4e6tro-mTtDk&_nc_ohc=EIBXpxw-WaYQ7kNvwGbR2Ld&_nc_gid=_HxsEF5lLlwEsXj1HnjNDw&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfcsARuERehy05I-YagPaLC7fOSZ3iMo0kIoZSgPOi3fdw&oe=68FE2F5F&_nc_sid=8b3546',
    },
    {
      id: 4,
      nombre: 'el pechiplayer',
      tipo: Tipo.tierra,
      nivel_poder: 2500,
      ciudad_origen: 'medellin',
      img: 'https://instagram.fbaq5-1.fna.fbcdn.net/v/t51.2885-19/370889761_3429843607234237_2219584953790607986_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fbaq5-1.fna.fbcdn.net&_nc_cat=1&_nc_oc=Q6cZ2QG8JnzG7Ezny70YbmLqWMqM2jTlCPVne_OnlCFX42DuTsHBec9gqteDiAJpgM1kFjo&_nc_ohc=PNsMXOTkdUUQ7kNvwGIJYPk&_nc_gid=bUCa2JqTugBMXrYsjm1llQ&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfeDwlhldsZGiWaOL4E8FR3PA3VcUKGmZutckop7vu6MZw&oe=68FE12C8&_nc_sid=8b3546',
    },
    {
      id: 5,
      nombre: 'el traqui',
      tipo: Tipo.agua,
      nivel_poder: 1800,
      ciudad_origen: 'barranquilla',
      img: 'https://instagram.fbaq5-1.fna.fbcdn.net/v/t51.2885-19/503623104_17924562222081526_2575059572092218850_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fbaq5-1.fna.fbcdn.net&_nc_cat=1&_nc_oc=Q6cZ2QHmubT7BocVX3fA8dTALaPawdcYHrAnPSYCsgEhdKmZtcYa2WbS87Zx5bVYzUUy-Ow&_nc_ohc=PoDgrB3DhsUQ7kNvwFfWT0F&_nc_gid=ALdifdazMQKDEjPSJOvWQQ&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_Afel-ZXlh7p_rfObFfQMYpUt7TDMFaZ9-l4UiW2ncbw_uA&oe=68FE1B2B&_nc_sid=8b3546',
    },
  ];

  getCartas(): Carta[] {
    return this.cartas;
  }

  getCartasByTipo(tipo: Tipo): Carta[] {
    const cartasFiltradas = this.cartas.filter((carta) => carta.tipo === tipo);

    return cartasFiltradas;
  }
}

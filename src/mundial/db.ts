import { Jugador, Equipo } from './mundial.model';

export const equipos: Equipo[] = [
  {
    id: 1,
    pais: 'Argentina',
    confederacion: 'conmebol',
    n_campeon: 2,
    escudo:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.cGTZsMQ6aybV7n-fITir1wHaHa%3Fcb%3D12%26pid%3DApi%26ucfimg%3D1&f=1&ipt=2033262eec6eda9d77230627ef749a78135c930232092f232cbb60c481f9af79&ipo=images',
    jugadores: [1],
  },
  {
    id: 2,
    pais: 'Brasil',
    confederacion: 'chipacori',
    n_campeon: 5,
    escudo:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.czKKLbR6QuX5BR-BGpMAQwHaI_%3Fcb%3D12%26pid%3DApi&f=1&ipt=2f18fdeae8514bb4b089a55f1b69c13ac19aec47fbf6e752eda90678fd0e8efb&ipo=images',
    jugadores: [2],
  },
];

export const jugadores: Jugador[] = [
  {
    id: 1,
    nombre: 'Lionel Messi',
    edad: 36,
    equipo: 1,
    url_imagen:
      'https://instagram.fbaq5-1.fna.fbcdn.net/v/t51.2885-19/424905549_7243065989106669_45026390061580919_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fbaq5-1.fna.fbcdn.net&_nc_cat=1&_nc_oc=Q6cZ2QEL01mZ73VlkhUnZ6YBSPMMsJ8vJUEvMc38kBDOEPK5icfwx9_M-3BZv8NWQYSFP6k&_nc_ohc=fM36q8gTcUYQ7kNvwEhYYd0&_nc_gid=1HRj2MzOLb0hL8icvHH6bA&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AfcR0NipjpMg0MY0HdxVgZdRmRbMrFUtpq9ruzfk_NH9hg&oe=690032B1&_nc_sid=7d3ac5',
    dribling: 95,
    velocidad: 86,
    regate: 88,
  },

  {
    id: 2,
    nombre: 'Neymar Jr',
    edad: 29,
    equipo: 2,
    url_imagen:
      'https://instagram.fbaq5-1.fna.fbcdn.net/v/t51.2885-19/488411045_655272610771839_8279994505596594434_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDgwLmMyIn0&_nc_ht=instagram.fbaq5-1.fna.fbcdn.net&_nc_cat=1&_nc_oc=Q6cZ2QEbvSOicO86bClyzcbJT18c4nXwF1Wfuj9wC-tnEF9uBgWtAk7lpt9xuxqSfEWQOto&_nc_ohc=TmsdHysrkKsQ7kNvwGTO4B2&_nc_gid=5s0K97fOgYV5kcgTNvLeaA&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_Afe05CTdfNg_jKUB2KcnxAYPfw52EVvF6oT8M_ITxBBE8A&oe=6900237E&_nc_sid=7a9f4b',
    dribling: 92,
    velocidad: 91,
    regate: 89,
  },
];

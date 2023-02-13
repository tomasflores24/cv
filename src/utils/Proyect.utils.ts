import ann from '../assets/ann.jpg';

export interface DataProyect {
  title: string;
  image: string;
  content: string;
  deploy?: string | false;
  gitHub?: string | false;
}

export const allProyects: Array<DataProyect> = [
  {
    title: 'Countries App',
    image: ann,
    content:
      'Aplicacion que recibe informacion de paises de una api y la renderiza en pantalla. La API esta hecha con express y la base de datos con PostgreSql usando el ORM sequelize',
    deploy: false,
    gitHub: 'https://github.com/tomasflores24/countries',
  },
  {
    title: 'Countries 2',
    image: ann,
    content:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',

    deploy: false,
    gitHub: 'https://github.com/tomasflores24/countries',
  },
  {
    title: 'Countries 3',
    image: ann,
    content:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',

    deploy: false,
    gitHub: 'https://github.com/tomasflores24/countries',
  },
];

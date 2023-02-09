import ann from '../assets/ann.jpg';

export interface DataProyect {
    title: string;
    image: string;
    content: string;
    deploy?: string;
    gitHub?: string;
}

export const allProyects: Array<DataProyect> = [
  {
    title: 'Countries 1',
    image: ann,
    content:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    deploy: 'https',
    gitHub: 'https',
  },
  {
    title: 'Countries 2',
    image: ann,
    content:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',

    deploy: 'https',
    gitHub: 'https',
  },
  {
    title: 'Countries 3',
    image: ann,
    content:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',

    deploy: 'https',
    gitHub: 'https',
  },
];

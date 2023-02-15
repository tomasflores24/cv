export const navItems = ['Inicio', 'Experiencias', 'Competencias', 'Contacto'];
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export const navName = {
  Inicio: 'Inicio',
  Competencias: 'Competencias',
  Experiencias: 'Experiencias',
  Contacto: 'Contacto',
};

export const contactData = [
  {
    title: 'Mail',
    content: 'tomasflores.dev@gmail.com',
    icon: faEnvelope,
    link: 'mailto:tomasflores.dev@gmail.com',
  },
  {
    title: 'Ubicacion',
    content: 'Argentina - Buenos Aires - Florencio Varela',
    icon: faLocationDot,
    link: 'https://www.google.com.ar/maps/place/Florencio+Varela,+Provincia+de+Buenos+Aires/@-34.7955318,-58.3057515,13z/data=!3m1!4b1!4m6!3m5!1s0x95a329628f552cad:0x813d55ba09834999!8m2!3d-34.7965806!4d-58.276012!16s%2Fm%2F03m4hbx',
  },
  {
    title: 'GitHub',
    content: 'tomasflores24',
    icon: faGithub,
    link: 'https://github.com/tomasflores24',
  },
  {
    title: 'Linkedin',
    content: 'linkedin.com/in/tomasflores-dev/',
    icon: faLinkedin,
    link: 'https://www.linkedin.com/in/tomasflores-dev/',
  },
];

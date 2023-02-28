import Box from '@mui/material/Box';
import { IconApp, Subtitle, Title } from '../material';
import { navName } from '../utils';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export const Home = () => {
  return (
    <Box id={navName.Inicio} component="section" sx={{ py: '10rem' }}>
      <IconApp nameIcon={faUser} />
      <Title>{navName.Inicio}</Title>

      <Subtitle>
        Soy Tomas Flores, tengo 19 años y soy un desarrollador Fullstack.
      </Subtitle>
      <Subtitle>
        Busco ser parte de un equipo de desarrollo en el cual pueda aportar mis
        habilidades logísticas en el desarrollo de funcionalidades
        cliente-servidor.
      </Subtitle>
      <Subtitle>
        Me gusta construir aplicaciones web que tengan un impacto positivo en la
        sociedad. Y entregue soluciones que proporcionen valor a quienes las
        implementan.
      </Subtitle>
    </Box>
  );
};

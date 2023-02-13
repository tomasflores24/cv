import Box from '@mui/material/Box';
import { IconApp, Subtitle, Title } from '../material';
import { navName } from '../utils';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export const Home = () => {
  return (
    <Box
      id={navName.Inicio}
      component="section"
      sx={{
        paddingTop: '10rem',
        paddingBottom: '10rem',
      }}
    >
      <IconApp nameIcon={faUser} />
      <Title>{navName.Inicio}</Title>
      
      <Subtitle>
        Soy Tomas Flores, tengo 19 años y soy un desarrollador Fullstack.
      </Subtitle>
      <Subtitle>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, velit.
        voluptatem libero omnis porro fugiat recusandae?
      </Subtitle>
      <Subtitle>
        dolor sit amet consectetur, adipisicing elit. Doloribus voluptatem
        libero omnis porro fugiat recusandae? Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Accusamus, minus.
      </Subtitle>
      <Subtitle>
        dolor sit amet consectetur, adipisicing elit. Doloribus voluptatem
        libero omnis porro fugiat recusandae? Lorem ipsum dolor sit amet.
      </Subtitle>
    </Box>
  );
};

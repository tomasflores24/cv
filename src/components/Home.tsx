import Box from '@mui/material/Box';
import { Subtitle, Title } from '../material';
import { navName } from '../utils';

export const Home = () => {
  return (
    <Box
      id={navName.Inicio}
      component="section"
      sx={{
        paddingTop: '15rem',
        paddingBottom: '10rem',
      }}
    >
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

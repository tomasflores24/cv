import { Title } from '../material';
import { navName } from '../utils';
import Box from '@mui/material/Box';

export const Proyects = () => {
  return (
    <Box
      id={navName.Experiencias}
      component="section"
      sx={{
        backgroundColor: 'gray',
        paddingTop: '15rem',
        paddingBottom: '10rem',
      }}
    >

      <Title>{navName.Experiencias}</Title>
      {/* PROYECTOS JEJE */}
    </Box>
  );
};



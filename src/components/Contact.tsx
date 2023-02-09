import { Box } from '@mui/material';
import { navName } from '../utils';
import { Title, IconApp } from '../material';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export const Contact = () => {
  return (
    <Box
      id={navName.Contacto}
      component="section"
      sx={{ marginBottom: '5rem', paddingTop: '5rem', paddingBottom: '5rem' }}
    >
      <IconApp nameIcon={faPhone} />
      <Title>Contacto</Title> 
    </Box>
  );
};

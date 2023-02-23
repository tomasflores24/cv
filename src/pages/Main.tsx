import { Container, styled } from '@mui/material';
import { Contact, Home, Proyects, Skills } from '../components';

const Main = () => {
 
  return (
    <Container
      className="container__main"
      maxWidth={'md'}
      sx={{ bgcolor: 'primary.main' }}
    >
      <Home />

      <Proyects />
      <Skills />
      <Contact />
    </Container>
  );
};

export default Main;

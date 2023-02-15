import { Container } from '@mui/material';
import { Contact, Home, Proyects, Skills } from '../components';

const Main = () => {
  return (
    <Container
      className="container__main"
      maxWidth={'md'}
      sx={{ backgroundColor: 'inherit' }}
    >
      <Home />

      <Proyects />
      <Skills />
      <Contact />
    </Container>
  );
};

export default Main;

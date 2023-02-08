import Container from '@mui/material/Container';
import { Contact, Home, Proyects, Skills } from '../components';

const Main = () => {
  return (
    <Container
      className="container__main"
      maxWidth={'sm'}
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

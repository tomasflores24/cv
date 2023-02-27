import { Contact, Footer, Home, NavBar, Proyects, Skills } from './components';
import { Box, Container } from '@mui/material';

function App() {
  return (
    <Box color="white" bgcolor="primary.main">
      <NavBar />
      <Container component="main" maxWidth={'md'}>
        <Home />
        <Proyects />
        <Skills />
        <Contact />
      </Container>

      <Footer />
    </Box>
  );
}

export default App;

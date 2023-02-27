import { Box, Grid } from '@mui/material';
import { contactData, navName } from '../utils';
import { Title, IconApp, ContactInformation } from '../material';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export const Contact = () => {
  return (
    <Box
      id={navName.Contacto}
      component="section"
      sx={{ mb: { xs: '5rem', md: '7rem' }, pt: '1rem' }}
    >
      <IconApp nameIcon={faPhone} />
      <Title>Contacto</Title>

      <Grid container pt="2rem">
        {contactData.map((c) => (
          <Grid item xs={12} md={7} lg={10} margin="auto" key={c.title}>
            <ContactInformation Icon={c.icon} title={c.title} link={c.link}>
              {c.content}
            </ContactInformation>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
// RESPONSIVE DE CONTACTO con galaxy fold

import { Box, Grid } from '@mui/material';
import { contactData, navName } from '../utils';
import { Title, IconApp, ContactInformation } from '../material';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export const Contact = () => {
  return (
    <Box
      id={navName.Contacto}
      component="section"
      sx={{ mb: '5rem', pt: '1rem', pb: '5rem' }}
    >
      <IconApp nameIcon={faPhone} />
      <Title>Contacto</Title>

      <Grid container sx={{ pt: '2rem' }}>
        {contactData.map((c) => (
          <Grid item xs={11} md={7} margin="auto" key={c.title}>
            <ContactInformation Icon={c.icon} title={c.title} link={c.link}>
              {c.content}
            </ContactInformation>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

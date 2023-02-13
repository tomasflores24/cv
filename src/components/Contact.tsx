import { Box, Grid } from '@mui/material';
import { contactData, navName } from '../utils';
import { Title, IconApp, ContactInformation } from '../material';
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

      <Grid container sx={{ paddingTop: '2rem' }}>
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

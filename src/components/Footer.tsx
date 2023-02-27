import Box from '@mui/material/Box';

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        boxShadow: '0rem 1rem 1rem 1rem black',
        bgcolor: 'primary.main',
        py: '1.5rem',
        opacity: '70%',
        fontSize: 'small',
        textAlign: 'center',
        // CAMBIAR FUENTE
      }}
    >
      © 2023 Mi Porfolio
    </Box>
  );
};

import Box from '@mui/material/Box';
import { IconApp } from './Icons';
import Typography from '@mui/material/Typography';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Paper } from '@mui/material';

interface Props {
  Icon: IconProp;
  title: string;
  children: any;
  link?: string;
}

export const ContactInformation = ({
  Icon,
  title,
  children,
  link = '*',
}: Props) => {
  return (
    <Paper
      sx={{
        color: 'white',
        display: 'flex',
        width: '65%',
        margin: 'auto',
        marginBottom: '1.5rem',
        backgroundColor: '#1f2937',
        padding: '.7rem',
        ":hover": {boxShadow:'0 0 1px 1px gray'}
      }}
      component="a"
      href={link}
      target="blanck"
    >
      <IconApp
        nameIcon={Icon}
        size="x-large"
        display="inline"
        width="auto"
        opacity="100%"
        color="#34d399"
      />
      <Box sx={{ marginLeft: '1rem' }}>
        <Typography sx={{ fontWeight: '600', fontSize: '1.1rem' }}>
          {title}
        </Typography>
        <Typography
          sx={{
            opacity: '70%',
            fontSize: '.9rem',
          }}
        >
          {children}
        </Typography>
      </Box>
    </Paper>
  );
};

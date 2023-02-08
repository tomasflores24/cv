import Typography from '@mui/material/Typography';

interface ChildrenProps {
  children: string;
}

export const Title = ({ children }: ChildrenProps) => (
  <Typography
    variant="h4"
    gutterBottom
    sx={{ fontWeight: 'bold', marginBottom: '1rem' }}
  >
    {children}
  </Typography>
);

export const Subtitle = ({ children }: ChildrenProps) => (
  <Typography variant="subtitle1" gutterBottom sx={{ opacity: '75%' }}>
    {children}
  </Typography>
);

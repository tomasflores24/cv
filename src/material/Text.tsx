import Typography from '@mui/material/Typography';

interface ChildrenProps {
  children: string;
}

export const Title = ({ children }: ChildrenProps) => (
  <Typography
    variant="h4"
    gutterBottom
    sx={{ fontWeight: 'bold', mb: '1rem', textAlign:'center' }}
  >
    {children}
  </Typography>
);

export const Subtitle = ({ children }: ChildrenProps) => (
  <Typography variant="subtitle1" gutterBottom sx={{ opacity: '75%', textAlign:'center' }}>
    {children}
  </Typography>
);
